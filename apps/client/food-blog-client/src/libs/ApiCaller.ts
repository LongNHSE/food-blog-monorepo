import axios, { AxiosRequestConfig } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const axiosParams: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  withCredentials: true,
};

// Public Axios instance
const axiosPublic = axios.create(axiosParams);

// Private Axios instance
const axiosPrivate = axios.create(axiosParams);

axiosPrivate.interceptors.request.use(async (config) => {
  let token = getCookie('access_token');

  if (!token) {
    const refreshedToken = await refreshAccessToken();
    token = refreshedToken !== null ? refreshedToken : undefined;
  }

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      originalRequest._retryAttempt = originalRequest._retryAttempt || 0;

      if (originalRequest._retryAttempt < 5) {
        originalRequest._retryAttempt += 1;
        const newToken = await refreshAccessToken();

        if (newToken) {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosPrivate(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

// Refresh Token Function
const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const response = await axiosPublic.post('/auth/refresh-token');
    const accessToken = response.data?.accessToken;

    if (accessToken) {
      // const cookieStore = cookies();
      await setCookie('access_token', accessToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      return accessToken;
    }
  } catch (e) {
    // On server side, do not use window.location
    console.error('Failed to refresh token, logging out...');
    deleteCookie('access_token');
    throw new Error('Unauthorized');
  }

  return null;
};

export { axiosPublic, axiosPrivate };

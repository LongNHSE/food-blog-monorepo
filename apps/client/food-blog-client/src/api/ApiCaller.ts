import axios, { AxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';

const axiosParams: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  withCredentials: true,
};

const axiosPublic = () => {
  return axios.create(axiosParams);
};

const axiosPrivate = async () => {
  const cookie = await cookies();
  const privateInstance = axios.create(axiosParams);

  privateInstance.interceptors.request.use(async (config) => {
    let token = cookie.get('access_token');

    if (!token) {
      token = await refreshAccessToken();
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  privateInstance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 &&
        originalRequest._retryAttempt <= 5
      ) {
        originalRequest._retryAttempt = (originalRequest._retryAttempt || 0) + 1;
        await refreshAccessToken();
        return privateInstance.request(error.config);

      }
      return Promise.reject(error);
    }
  );

  return privateInstance;
};

const refreshAccessToken = async () => {
  try {
    const response = await axiosPublic().post('/auth/refresh-token');
    const accessToken = response.data.accessToken;
    if (accessToken) {
      await cookies().set('access_token', accessToken, {
        maxAge: 60 * 60 * 24 * 30,
      });
      return accessToken;
    }
  } catch (e) {
    await cookies().delete('access_token');
    window.location.href = '/login';
  }
  return null;
};

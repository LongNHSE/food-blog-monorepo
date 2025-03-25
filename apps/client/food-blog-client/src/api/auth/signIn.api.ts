import { axiosPublic } from '../ApiCaller';

export const login = async (email: string, password: string) => {
  const response = await axiosPublic().post('/auth/sign-in', {
    email,
    password,
  });
  return response.data;
};

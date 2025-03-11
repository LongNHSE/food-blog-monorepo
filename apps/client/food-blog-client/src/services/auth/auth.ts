import { axiosPublic } from '@/libs/ApiCaller';
import { ApiResponse, TUser } from '@food-blog/interfaces';

export async function login(
  username: string,
  password: string
): Promise<ApiResponse<{ user: TUser; accessToken: string }>> {
  try {
    const result = await axiosPublic.post('/login', {
      username,
      password,
    });
    if (!result.data) {
      throw new Error('Login failed: No data received');
    }
    return result.data;
  } catch (e: any) {
    throw new Error(e.message || 'An error occurred during login');
  }
}

'use client';
import { Label } from '@radix-ui/react-label';
import { Link } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/From';
import { Input } from './ui/Input';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/services/auth/auth';
import { ApiResponse, TUser } from '@food-blog/interfaces';
import { useAppDispatch } from '@/libs/store';
import { loginSlice } from '@/libs/states/user/userSlice';
import { getCookies } from 'cookies-next';
import { Spinner } from './ui/Spinner';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export const LoginComponent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'koala',
      password: 'password123!',
    },
  });
  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
      const result: ApiResponse<{ user: TUser; accessToken: string }> =
        await login(data.username, data.password);
      const accessToken = getCookies();
      console.log(accessToken);
      if (result.statusCode === 200 && result?.data?.user) {
        dispatch(loginSlice(result.data.user));
        router.replace('/blogs');
      } else {
        console.error('Login failed');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-y-5">
            <div>
              <FormField
                control={form.control}
                defaultValue=""
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                defaultValue=""
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between mb-2">
                      <FormLabel>Password</FormLabel>
                      <Label htmlFor="password" className="font-medium">
                        <a href="/register">Forgot Password? </a>
                      </Label>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6 px-16">
            <Button
              type="submit"
              variant={loading ? 'loading' : 'loginButton'}
              className="text-white"
            >
              {loading ? <Spinner size="small" /> : 'Login'}
            </Button>
          </div>
        </form>
      </Form>
      <div>
        <div className="flex justify-center mt-4 px-16">
          <p>
            Don&apos;t have an account?{' '}
            <Link
              href="/sign-up"
              className="text-blue-500 underline underline-offset-4"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

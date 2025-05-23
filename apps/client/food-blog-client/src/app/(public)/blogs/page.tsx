'use client';
import { logoutSlice } from '@/libs/states/user/userSlice';
import { useAppDispatch } from '@/libs/store';
import { useSelector } from 'react-redux';

export default function Index() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="wrapper">{user.name}</div>
      <h1 className="text-4xl font-bold text-center">
        Welcome to food-blog-client!
      </h1>
      <button
        onClick={() => {
          console.log('logout');
          dispatch(logoutSlice());
        }}
      >
        logout
      </button>

      <p className="text-center">
        Get started by editing{' '}
        <code>apps/client/food-blog-client/src/app/pages/blogs/page.tsx</code>
      </p>
    </div>
  );
}

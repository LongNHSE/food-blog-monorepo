import { configureStore } from '@reduxjs/toolkit';
import userReducer from './states/user/userSlice';
import { useDispatch } from 'react-redux';
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
  });
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppStore = ReturnType<typeof makeStore>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
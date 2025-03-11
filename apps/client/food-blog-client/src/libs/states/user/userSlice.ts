import { TUser } from '@food-blog/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TUser = {
  _id: '',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  role: '',
  status: '',
  createdAt: undefined,
  updatedAt: undefined,
  avatar: '',
  password: '',
  __v: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSlice: (state, action: PayloadAction<TUser>) => {
      state._id = action.payload._id.toString();
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.status = action.payload.status;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.avatar = action.payload.avatar;
    },
    logoutSlice: (state) => {
      state._id = '';
      state.firstName = '';
      state.lastName = '';
      state.username = '';
      state.email = '';
      state.role = '';
      state.status = '';
      state.createdAt = undefined;
      state.updatedAt = undefined;
      state.avatar = '';
    },
  },
});
export const { loginSlice, logoutSlice } = userSlice.actions;
export default userSlice.reducer;

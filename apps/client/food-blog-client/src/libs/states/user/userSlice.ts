import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  role: string;
}

const initialState: UserInterface = {
  id: '1',
  name: 'Long',
  email: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInterface>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.email = '';
      state.id = '';
      state.name = '';
      state.role = '';
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

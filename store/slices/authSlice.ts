import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSliceProps } from 'types/store/index';

const initialState: AuthSliceProps = {
  isLoggedIn: true,
  isSuspended: false,
  isVerified: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth: (state: AuthSliceProps) => {
      return state;
    },
  },
});

export const { checkAuth } = authSlice.actions;

export default authSlice.reducer;

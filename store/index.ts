import { configureStore, combineReducers } from '@reduxjs/toolkit';

import darkModeReducer from './slices/darkModeSlice';
import authReducer from './slices/authSlice';

const reducer = combineReducers({
  theme: darkModeReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

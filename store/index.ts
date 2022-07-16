import { configureStore, combineReducers } from '@reduxjs/toolkit';

import darkModeReducer from './slices/darkModeSlice';

const reducer = combineReducers({
  theme: darkModeReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

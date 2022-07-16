import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DarkmodeState {
  isDarkmode: boolean;
}

const initialState: DarkmodeState = {
  isDarkmode: false,
};

const darkModeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkmode: (state: DarkmodeState) => {
      state.isDarkmode = !state.isDarkmode;
    },
  },
});

export const { toggleDarkmode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

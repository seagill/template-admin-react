import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    collapsed: false,
  },
  reducers: {
    toggleCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleCollapsed } = globalSlice.actions;

export default globalSlice.reducer;

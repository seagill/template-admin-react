import { createSlice } from '@reduxjs/toolkit';

const golabSlice = createSlice({
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

export const { toggleCollapsed } = golabSlice.actions;

export default golabSlice.reducer;

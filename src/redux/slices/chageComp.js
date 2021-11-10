import { createSlice } from '@reduxjs/toolkit';

const compSlice = createSlice({
  name: 'changeComp',
  initialState: {
    comp: 1
  },
  reducers: {
    changeComp: (state, action) => {
      state.comp = action.payload;
    }
  }
});

export const { changeComp } = compSlice.actions;
export default compSlice.reducer;

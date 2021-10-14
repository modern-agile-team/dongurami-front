import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInfo, putIntroDesc } from 'apis/clubhome';

const getClubInfo = createAsyncThunk('clubhome/getClubInfo', async (clubId) => {
  const response = await getInfo(clubId);
  return response.data;
});

// Then, handle actions in your reducers:
const clubInfoSlice = createSlice({
  name: 'clubhome',
  initialState: {},
  reducers: {
    putDesc(state, action) {
      state, action;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getClubInfo.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  }
});

export const { putDesc } = clubInfoSlice.actions;
export { getClubInfo };
export default clubInfoSlice.reducer;

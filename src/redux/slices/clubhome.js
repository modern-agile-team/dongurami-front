import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInfo } from 'apis/clubhome';

const getClubInfo = createAsyncThunk('clubhome/getClubInfo', async (clubId) => {
  const response = await getInfo(clubId);
  return response.data;
});

const clubInfoSlice = createSlice({
  name: 'clubhome',
  initialState: {},
  reducers: {
    putDesc(state, action) {
      return { state, action };
    }
  },
  extraReducers: {
    [getClubInfo.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getClubInfo.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.info = action.payload;
    },
    [getClubInfo.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    }
  }
});

export const { putDesc } = clubInfoSlice.actions;
export { getClubInfo };
export default clubInfoSlice.reducer;

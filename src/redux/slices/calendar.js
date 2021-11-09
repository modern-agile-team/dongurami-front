import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInfo } from 'apis/calendar';

const getSchedule = createAsyncThunk(
  'calendar/getSchedule',
  async ({ clubId, today }) => {
    const response = await getInfo(clubId, today);
    return response.data;
  }
);

const scheduleSlice = createSlice({
  name: 'calendar',
  initialState: {},
  reducers: {
    getData(state, action) {
      return { state, action };
    }
  },
  extraReducers: {
    [getSchedule.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getSchedule.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.info = action.payload;
    },
    [getSchedule.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    }
  }
});

export const { getData } = scheduleSlice.actions;
export { getSchedule };
export default scheduleSlice.reducer;

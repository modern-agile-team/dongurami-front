import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInfo } from 'apis/clubhome';

const getClubInfo = createAsyncThunk('clubhome/getClubInfo', async (clubId) => {
  try {
    const response = await getInfo(clubId);
    return response.data;
  } catch (err) {
    switch (err.response.status) {
      case 401:
        alert('로그인 후 이용해주세요.');
        break;
      case 404:
        alert('존재하지 않는 동아리입니다.');
        break;
      default:
        alert('알 수 없는 오류입니다 개발자에게 문의해주세요.');
    }
  }
});

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
    }),
      builder.addCase(getClubInfo.rejected, (state, action) => {
        state.error = action.error;
      });
  }
});

export const { putDesc } = clubInfoSlice.actions;
export { getClubInfo };
export default clubInfoSlice.reducer;

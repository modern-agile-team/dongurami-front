import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts, searchPosts } from 'apis/board';
import { changeComp } from './chageComp';

const getBoardPosts = createAsyncThunk(
  'board/getBoardPosts',
  async ({ category, sort, order, type, keyword, clubNum }, { dispatch }) => {
    dispatch(boardSlice.actions.clear());
    let response;
    if (type && keyword) {
      response = await searchPosts({
        category,
        sort,
        order,
        type,
        keyword,
        clubNum
      });
    } else {
      response = await getPosts({ category, sort, order, clubNum }).catch(
        async () => {
          alert('동아리에 가입된 사람만 접근할 수 있습니다!');
          dispatch(changeComp(1));
        }
      );
    }

    return response.data.boards;
  }
);

const boardSlice = createSlice({
  name: 'board',
  initialState: { posts: [] },
  reducers: {
    clear() {
      return { posts: [] };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBoardPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  }
});

export { getBoardPosts };
export default boardSlice.reducer;

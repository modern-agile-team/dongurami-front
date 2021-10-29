import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts, searchPosts } from 'apis/board';

const getBoardPosts = createAsyncThunk(
  'board/getBoardPosts',
  async ({ category, sort, order, type, keyword, clubNum }) => {
    let response;
    if (type && keyword) {
      response = await searchPosts({ category, sort, order, type, keyword, clubNum });
    } else {
      response = await getPosts({ category, sort, order, clubNum });
    }
    return response.data.boards;
  }
)

const boardSlice = createSlice({
  name: 'board',
  initialState: { posts: [] },
  extraReducers: (builder) => {
    builder.addCase(getBoardPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getBoardPosts.rejected, () => {
      alert('동아리에 가입된 사람만 접근할 수 있습니다!');
      return { posts: [] };
    })
  }
});

export { getBoardPosts };
export default boardSlice.reducer;

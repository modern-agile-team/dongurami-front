import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts, searchPosts } from 'apis/board';

const getBoardPosts = createAsyncThunk(
  'board/getBoardPosts',
  async ({ category, sort, order, type, keyword }) => {
    let response;
    if (type && keyword) {
      response = await searchPosts({ category, sort, order, type, keyword });
    } else {
      response = await getPosts({ category, sort, order });
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
  }
});

export { getBoardPosts };
export default boardSlice.reducer;

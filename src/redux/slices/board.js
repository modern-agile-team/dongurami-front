import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts, searchPosts } from 'apis/board';

const getBoardPosts = createAsyncThunk(
  'board/getBoardPosts',
  async ({ category, sort, order }) => {
    const response = await getPosts(category, { sort, order });
    return response.data.boards;
  }
);

const searchBoardPosts = createAsyncThunk(
  'board/searchBoardPosts',
  async ({ category, sort, order, type, keyword }) => {
    const response = await searchPosts(category, { sort, order, type, keyword });
    return response.data.boards;
  }
)

const boardSlice = createSlice({
  name: 'board',
  initialState: { posts: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getBoardPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(searchBoardPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  }
});

export { getBoardPosts, searchBoardPosts };
export default boardSlice.reducer;

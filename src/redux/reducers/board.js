import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getBoardPosts = createAsyncThunk(
  'board/getBoardPosts',
  async ({ order, search, searchBy }) => {
    let response;
    if (search && searchBy) {
      response = await axios.get(`http://3.36.72.145:8080/api/search/notice/${searchBy}/${search}/${order.replace(' ', '/')}`);
    } else {
      response = await axios.get(`http://3.36.72.145:8080/api/board/notice/${order.replace(' ', '/')}`);
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

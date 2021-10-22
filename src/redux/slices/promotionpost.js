import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'apis/post';

const getPost = createAsyncThunk('promotion/getPost', async (postId) => {
  const response = await api.getPost(postId);
  return response.data;
});

const postSlice = createSlice({
  name: 'post',
  initialState: {},

  extraReducers: (builder) => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      return {
        ...action.payload.board,
        comments: action.payload.comments
      };
    });
  }
});

export { getPost };
export default postSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'apis/post';

const getPost = createAsyncThunk(
  'post/getPost',
  async ({ category, pid }) => {
    const response = await api.getPost(category, pid);
    return response.data;
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: null,
  reducers: {
    setCategory(state, action) {
      state.category = action;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          ...action.payload.board,
          comments: action.payload.comments
        }
      });
  }
});

export { getPost };
export default postSlice.reducer;

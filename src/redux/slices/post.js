import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'apis/post';

const getPost = createAsyncThunk(
  'post/getPost',
  async (arg, { getState }) => {
    const state = getState();
    let { category, no: pid, clubNo: clubNum } = state.post;
    if (arg) {
      ({ category, pid, clubNum } = arg);
      await api.hitPost({ category, pid });
    }
    const response = await api.getPost(category, pid, clubNum);
    return response.data;
});

const postSlice = createSlice({
  name: 'post',
  initialState: {},
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      return {
        ...action.payload.board,
        category: state.category,
        comments: action.payload.comments,
        images: action.payload.images
      };
    });
    builder.addCase(getPost.rejected, () => {
      return {};
    })
  }
});

export const { setCategory } = postSlice.actions;
export { getPost };
export default postSlice.reducer;

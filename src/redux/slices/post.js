import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'apis/post';

const getPost = createAsyncThunk(
  'post/getPost',
  async (arg, { getState }) => {
    const state = getState().post;
    let { category, no: pid } = state;
    if (arg) {
      ({ category, pid } = arg);
    }
    const response = await api.getPost(category, pid);
    return response.data;
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: {},
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.fulfilled, (state, action) => {
        return {
          ...action.payload.board,
          category: state.category,
          comments: action.payload.comments
        }
      });
  }
});

export const { setCategory } = postSlice.actions;
export { getPost };
export default postSlice.reducer;

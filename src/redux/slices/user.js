import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserData } from 'apis/user';

const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const userData = (await getUserData()).data;
    return userData;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (_, action) => {
        return action.payload;
      });
  }
});

export { getUser };
export default userSlice.reducer;

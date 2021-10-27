import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserData } from 'apis/user';

const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const userData = (await getUserData()).data.user;
    return userData;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    signOut() {
      state = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (_, action) => {
        return action.payload;
      });
  }
});

export { getUser };
export default userSlice.reducer;

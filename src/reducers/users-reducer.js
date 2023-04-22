import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  profileThunk,
  registerThunk,
  logoutThunk,
} from "../services/user-thunks";
const initialState = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      console.log(state.currentUser);
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      console.log(state.currentUser);
    },
  },
});

export default usersSlice.reducer;
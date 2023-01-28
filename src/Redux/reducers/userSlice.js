//userSlice

import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    user: '',
    isLogged: false
  },
  reducers: {
    logIN(state, { payload }) {
      return { ...state, isLogged: true, user: payload }
    },
    logOut(state) {
      return { ...state, isLogged: false, user: '' }
    }
  }
});

export const { logIN, logOut } = user.actions;

export const selectUser = state => state.user;

export default user.reducer;
// src/store/userSlice.js 예를들어 slice가 하나 더 있을 경우
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    name: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.name = action.payload; // ex: "juhee"
    },
    logout: (state) => {
      state.isLogin = false;
      state.name = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

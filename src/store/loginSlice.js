import { createSlice } from "@reduxjs/toolkit/";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: null,
    token: null,
    userId: null,
    isAuthenticated: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
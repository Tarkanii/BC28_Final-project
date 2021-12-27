import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    email: "",
  },
  token: "",
  error: null,
  userId: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
     
    },
    [authOperations.register.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.userId= payload.id
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = initialState.user;
      state.token = "";
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.CheckedIsLoginCurrentUser.fulfilled](state, { payload }) {
      state.user.email = payload.data.email;
      state.userId= payload.data.id
    },
    [authOperations.CheckedIsLoginCurrentUser.rejected](state, { payload }) {
      state.user = initialState.user;
      state.token = "";
    },
  },
});

export default authSlice.reducer;

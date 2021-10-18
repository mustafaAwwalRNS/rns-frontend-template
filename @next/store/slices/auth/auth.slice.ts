/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState } from "./auth.types";
import { LoginResponse } from "@queries";

export const authInitialState: AuthSliceState = {
  loggedIn: false,
  user: { username: "", profileImage: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, { payload: { user, token } }: PayloadAction<LoginResponse>) {
      state.loggedIn = true;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },
    verify(state) {
      const userStringified = localStorage.getItem("user");
      const user =
        userStringified &&
        (JSON.parse(userStringified) as LoginResponse["user"]);
      const token = localStorage.getItem("token");
      if (user && token) {
        state.user = user;
        state.loggedIn = true;
      } else localStorage.clear();
    },
    logout(state) {
      state.user = authInitialState.user;
      state.loggedIn = false;
      localStorage.clear();
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

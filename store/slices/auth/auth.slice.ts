import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState } from "./auth.types";
import { LoginResponse } from "@queries";
export const authInitialState: AuthSliceState = { username: "" };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(
      state,
      { payload: { username, token } }: PayloadAction<LoginResponse>
    ) {
      state.username = username;
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);
    },
    verify(state) {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");
      if (username && token) state.username = username;
      else localStorage.clear();
    },
    logout(state) {
      state.username = "";
      localStorage.clear();
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

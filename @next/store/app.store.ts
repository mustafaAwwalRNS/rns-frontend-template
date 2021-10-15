import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices";

/**
 * createStore
 *
 * Features:
 * - Creates a redux store
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

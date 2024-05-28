
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "./store.helper";
import { Middleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { tokenApi } from "../api";

export const rootReducer = {
  [tokenApi.reducerPath]: tokenApi.reducer,
  // [userSlice.reducerPath]: persistReducer(
  //   getPersistConfig(userSlice.reducerPath),
  //   userSlice.reducer,
  // ),
};

export const rootMiddlewares: Middleware[] = [
  // rtkQueryErrorBoundary,
  tokenApi.middleware,
];

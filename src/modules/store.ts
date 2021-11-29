import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import layoutReducer, { LayoutState } from "modules/layoutSlice";
import {
  devToolOptions,
  serializeCheckOptions,
  SabanaState,
  sabanaReducers,
} from "sabana-music/lib/modules/store";

export type State = {
  layout: LayoutState;
} & SabanaState;

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    ...sabanaReducers,
  },
  devTools: devToolOptions,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(serializeCheckOptions),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, State, unknown, Action<string>>;

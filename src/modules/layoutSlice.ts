import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WidthMode } from "models/layout";

export type LayoutState = {
  width: number;
  widthMode: WidthMode;
};

const initialState: LayoutState = {
  width: 0,
  widthMode: WidthMode.Mobile,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setWidth: (state, { payload: width }: PayloadAction<number>) => {
      state.width = width;
    },
    setWidthMode: (state, { payload: widthMode }: PayloadAction<WidthMode>) => {
      state.widthMode = widthMode;
    },
  },
});

export const { setWidth, setWidthMode } = layoutSlice.actions;
export default layoutSlice.reducer;

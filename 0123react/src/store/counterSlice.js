import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "number",
  initialState: 1,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const snackBarSlice = createSlice({
  name: "snackBar",
  initialState: {
    shown: false,
    message: "Default snack bar message",
  },
  reducers: {
    showSnackBar(state, actions) {
      state.message = actions.payload;
      state.shown = true;
    },
    hideSnackBar(state, actions) {
      state.message = "";
      state.shown = false;
    },
  },
});

export const { showSnackBar, hideSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;

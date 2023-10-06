import { createSlice } from "@reduxjs/toolkit";

export const snackBarSlice = createSlice({
  name: "snackBar",
  initialState: {
    shown: false,
    message: "Default snack bar message",
    colorClass: " bg-tomato",
  },
  reducers: {
    showSnackBar(state, actions) {
      state.message = actions.payload.message;
      state.shown = true;
      state.colorClass = actions.payload.colorClass;
    },
    hideSnackBar(state, actions) {
      state.message = "";
      state.shown = false;
      state.colorClass = " bg-tomato";
    },
  },
});

export const { showSnackBar, hideSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;

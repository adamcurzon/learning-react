import { configureStore } from "@reduxjs/toolkit";
import SnackBarReducer from "./SnackBarReducer";

export default configureStore({
  reducer: {
    SnackBar: SnackBarReducer,
  },
});

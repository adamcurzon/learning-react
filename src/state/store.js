import { configureStore } from "@reduxjs/toolkit";
import SnackBarReducer from "./SnackBarReducer";
import UserReducer from "./UserReducer";

export default configureStore({
  reducer: {
    SnackBar: SnackBarReducer,
    User: UserReducer,
  },
});

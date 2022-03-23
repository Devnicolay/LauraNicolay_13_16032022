import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./authSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer";

/**
 * Store for redux
 */
const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;

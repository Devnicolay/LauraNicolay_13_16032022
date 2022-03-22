import { createSlice } from "@reduxjs/toolkit";

const userConnectedSlice = createSlice({
  name: "userConnected",
  initialState: {
    isConnected: false,
  },
  reducers: {
    toLogin: () => {},
    toSeeDetailsTransaction: () => {},
    toAddTransaction: () => {},
    toModifyTransaction: () => {},
    toDeleteTransaction: () => {},
  },
});

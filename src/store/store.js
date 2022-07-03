import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create Slice
const accountSlice = createSlice({
  name: "account",

  initialState: {
    balance: 100,
  },
});

// Create Store
const store = configureStore({ reducer: { account: accountSlice.reducer } });
export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create Slice
const accountSlice = createSlice({
  name: "account",

  initialState: {
    balance: 1000,
    name: "rahul ",
  },

  reducers: {
    // special function
    depositBalance: (state) => {
      state.balance += 1;
    },

    updateName: (state) => {
      state.name = "Mr. " + state.name;
    },
  },
});

// destructing
export const { depositBalance, updateName } = accountSlice.actions;

// Create Store
const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
  },
});
export default store;

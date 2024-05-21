import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("someAsyncAction/pending", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("someAsyncAction/fulfilled", (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase("someAsyncAction/rejected", (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Add more cases as needed
  },
});

export default authSlice;

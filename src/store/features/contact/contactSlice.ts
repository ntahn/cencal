import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./state";
import { addContactThunk, fetchContactsThunk } from "./thunks";

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch contacts";
      })
      .addCase(addContactThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to add contact";
      });
  },
});

export default contactSlice.reducer;

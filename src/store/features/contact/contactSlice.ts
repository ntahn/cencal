import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "@/models";
import { contactServices } from "@/api";

interface ContactState {
  contacts: Contact[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  status: "idle",
  error: null,
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await contactServices.getAll();
    if (!Array.isArray(response.data)) {
      throw new Error("Failed to fetch contacts");
    }
    return response.data;
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch contacts";
      });
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;

export const selectContactState = (state: { contacts: ContactState }) =>
  state.contacts;
export const selectAllContacts = (state: { contacts: ContactState }) =>
  state.contacts.contacts;
export const selectContactsStatus = (state: { contacts: ContactState }) =>
  state.contacts.status;
export const selectContactsError = (state: { contacts: ContactState }) =>
  state.contacts.error;

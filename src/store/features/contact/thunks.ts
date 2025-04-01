import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsServices } from "@/api";
import { errorToString } from "@/utils";

import { Contact } from "@/models";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsServices.getAllContact();
      return data;
    } catch (error) {
      return rejectWithValue(errorToString(error));
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact: Omit<Contact, "id">, { rejectWithValue }) => {
    try {
      const response = await contactsServices.addContact(contact);
      return response;
    } catch (error) {
      return rejectWithValue(errorToString(error));
    }
  }
);

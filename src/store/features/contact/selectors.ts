import { ContactState } from "./state";

export const selectContactState = (state: { contacts: ContactState }) =>
  state.contacts;
export const selectAllContacts = (state: { contacts: ContactState }) =>
  state.contacts.contacts;
export const selectContactsStatus = (state: { contacts: ContactState }) =>
  state.contacts.status;
export const selectContactsError = (state: { contacts: ContactState }) =>
  state.contacts.error;

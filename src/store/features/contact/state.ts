import { Contact } from "@/models";

export interface ContactState {
  contacts: Contact[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const initialState: ContactState = {
  contacts: [],
  status: "idle",
  error: null,
};

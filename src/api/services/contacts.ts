import { Contact } from "@/models";
import api from "../config/axios";

export const contactServices = {
  getAll: () => api.get<Contact[]>("/contacts"),
};

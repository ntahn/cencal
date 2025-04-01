import axios from "../config/axios";
import { errorToString } from "@/utils";
import { Contact } from "@/models";

export class ContactsRepository {
  private basePath = "/contacts";

  async getAllContacts() {
    try {
      const { data } = await axios.get<Contact[]>(this.basePath);
      return data;
    } catch (error) {
      throw Error(errorToString(error));
    }
  }

  async addContact(contact: Omit<Contact, "id">) {
    try {
      const { data } = await axios.post<Contact>(this.basePath, contact);
      return data;
    } catch (error) {
      throw Error(errorToString(error));
    }
  }
}

export const contactsRepository = new ContactsRepository();

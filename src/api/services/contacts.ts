import { errorToString } from "@/utils";
import { contactsRepository } from "../repositories";
import { Contact } from "@/models";

export const contactsServices = {
  getAllContact: async () => {
    try {
      const contacts = await contactsRepository.getAllContacts();
      if (!Array.isArray(contacts)) {
        throw Error("Invalid response.");
      }
      return sortContacts(contacts);
    } catch (error) {
      throw Error(errorToString(error));
    }
  },

  addContact: async (contact: Omit<Contact, "id">) => {
    try {
      const newContact = await contactsRepository.addContact(contact);
      if (!newContact) {
        throw new Error("Failed to create contact: No response from server");
      }
      return newContact;
    } catch (error) {
      throw Error(errorToString(error));
    }
  },
};

const sortContacts = (contacts: Contact[]) => {
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};

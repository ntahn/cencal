export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  note?: string;
  id: string;
}

export type AddContactFormData = Omit<Contact, "id">;

export interface ContactTableDataType {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  note?: string;
  id: string;
}

export interface ContactTableDataType {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

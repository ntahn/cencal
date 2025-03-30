export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  note: string;
  id: string;
}

export interface ContactTableDataType {
  key: React.Key;
  name: string;
  email: string;
  phoneNumber: string;
}

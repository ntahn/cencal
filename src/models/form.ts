import { Contact } from "./contact";

export interface FormProgress {
  title: string;
  description: string;
}

export interface ClientInfoFormData {
  contacts: Contact[];
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin?: string;
  };
}

export interface AddContactInput {
  id: string;
  title: string;
  placeholder: string;
  isRequired: boolean;
}

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

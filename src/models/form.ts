import { Contact } from "./contact";

export interface FormProgress {
  title: string;
  description: string;
}

export interface ClientInfoFormData {
  contacts: Contact[];
  vehicle: {
    vehicleMake: string | null;
    vehicleModel: string | null;
    vehicleYear: string | null;
    vehicleType: string | null;
  };
  services: object[];
}

export interface AddContactInput {
  id: string;
  title: string;
  placeholder: string;
  isRequired: boolean;
}

export interface DropdownItem {
  value: string;
  label: string;
}

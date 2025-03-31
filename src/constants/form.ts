import {
  AddContactFormData,
  AddContactInput,
  ClientInfoFormData,
  FormProgress,
} from "@/models";
import { strings } from "./strings";

export const formProgressSteps: FormProgress[] = [
  {
    title: "Step 1",
    description: strings.APPOINTMENTS.CREATE.CLIENT_INFO.TITLE,
  },
  {
    title: "Step 2",
    description: strings.APPOINTMENTS.CREATE.SERVICES.TITLE,
  },
  {
    title: "Step 3",
    description: strings.APPOINTMENTS.CREATE.REVIEW_AND_SEND.TITLE,
  },
];

export const clientInfoDefaultValues: ClientInfoFormData = {
  contacts: [],
  vehicle: {
    make: "",
    model: "",
    year: new Date().getFullYear(),
    vin: "",
  },
};

export const addContactFormDefaultvalues: AddContactFormData = {
  name: "",
  email: "",
  phoneNumber: "",
  secondPhoneNumber: "",
  note: "",
};

export const addContactFields: AddContactInput[] = [
  {
    id: "name",
    title:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.NAME.TITLE,
    placeholder:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.NAME
        .PLACE_HOLDER,
    isRequired: true,
  },
  {
    id: "email",
    title:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.EMAIL.TITLE,
    placeholder:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.EMAIL
        .PLACE_HOLDER,
    isRequired: false,
  },
  {
    id: "phoneNumber",
    title:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.PHONE_NUMBER
        .TITLE,
    placeholder:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.PHONE_NUMBER
        .PLACE_HOLDER,
    isRequired: false,
  },
  {
    id: "secondPhoneNumber",
    title:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER
        .SECOND_PHONE_NUMBER.TITLE,
    placeholder:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER
        .SECOND_PHONE_NUMBER.PLACE_HOLDER,
    isRequired: false,
  },
  {
    id: "note",
    title:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.NOTE.TITLE,
    placeholder:
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.NOTE
        .PLACE_HOLDER,
    isRequired: false,
  },
];

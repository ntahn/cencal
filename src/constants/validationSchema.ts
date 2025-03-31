import * as yup from "yup";
import { strings } from "./strings";

export const addContactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .test(
      "email-test",
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.EMAIL
        .ERROR_MESSAGE,
      function (email) {
        const { phoneNumber } = this.parent;
        return Boolean(email || phoneNumber);
      }
    ),
  phoneNumber: yup
    .string()
    .test(
      "phone-test",
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.PHONE_NUMBER
        .ERROR_MESSAGE,
      function (phoneNumber) {
        const { email } = this.parent;
        return Boolean(email || phoneNumber);
      }
    ),
  secondPhoneNumber: yup
    .string()
    .test(
      "second-phone-test",
      strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER
        .SECOND_PHONE_NUMBER.ERROR_MESSAGE,
      function () {
        const { email, phoneNumber } = this.parent;
        return Boolean(email || phoneNumber);
      }
    ),
  note: yup.string().optional(),
});

export const clientInfoSchema = yup.object({
  contacts: yup.array().min(1, "Contact is required."),

  vehicle: yup
    .object({
      vehicleYear: yup.string().required("Vehicle year is required"),
      vehicleMake: yup.string().required("Vehicle make is required"),
      vehicleModel: yup.string().required("Vehicle model is required"),
      vehicleType: yup.string().required("Vehicle type is required"),
    })
    .required(),
});

export type AddContactFormData = yup.InferType<typeof addContactSchema>;

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

export type AddContactFormData = yup.InferType<typeof addContactSchema>;

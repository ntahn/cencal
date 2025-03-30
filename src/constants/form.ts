import { FormProgress } from "@/models";
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

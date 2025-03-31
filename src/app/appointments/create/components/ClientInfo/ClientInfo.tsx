import { FormProvider, useForm } from "react-hook-form";
import { ContactInfo } from "./ContactInfo";

import { ClientInfoFormData } from "@/models";
import { clientInfoDefaultValues } from "@/constants";

import styles from "./ClientInfo.module.scss";

type ClientInfoProps = {
  currentStep?: number;
};

export const ClientInfo = ({}: ClientInfoProps) => {
  const methods = useForm<ClientInfoFormData>({
    defaultValues: clientInfoDefaultValues,
  });

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
    // onSubmit?.(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <ContactInfo />
        {/* <VehicleInfo /> */}
      </form>
    </FormProvider>
  );
};

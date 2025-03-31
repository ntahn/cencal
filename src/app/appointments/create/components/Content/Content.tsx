import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Card } from "@/components";
import { ProgressButtons } from "../ProgressButtons";
import { clientInfoDefaultValues, clientInfoSchema } from "@/constants";

import styles from "./Content.module.scss";

type ContentProps = {
  children: React.ReactNode;
  currentStep: number;
  onClickBack?: () => void;
  onClickForward?: () => void;
};

export const Content = ({
  currentStep,
  onClickBack,
  onClickForward,
  children,
}: ContentProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const methods = useForm<any>({
    defaultValues: clientInfoDefaultValues,
    mode: "onChange",
    resolver: yupResolver(clientInfoSchema),
  });

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  const handleClickFirstStep = async () => {
    const { trigger } = methods;
    const isValid = await trigger(["contacts", "vehicle"]);
    if (isValid && onClickForward) onClickForward();
  };

  const handleClickForward = () => {
    switch (currentStep) {
      case 0:
        handleClickFirstStep();
        break;
      default:
        onClickForward?.();
        break;
    }
  };

  return (
    <FormProvider {...methods}>
      <Card className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.container}>
          {children}
          <ProgressButtons
            currentStep={currentStep}
            onClickBack={onClickBack}
            onClickForward={handleClickForward}
          />
        </form>
      </Card>
    </FormProvider>
  );
};

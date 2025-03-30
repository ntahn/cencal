"use client";

import { Flex } from "antd";
import { useCallback, useState } from "react";
import { Content, ProgressSteps } from "./components";
import { ClientInfo } from "./components/ClientInfo/ClientInfo";

import { useHeader } from "@/hooks";

import { ROUTES, strings } from "@/constants";

import styles from "./createAppointment.module.scss";

const CreateAppointments = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useHeader({
    title: ROUTES.APPOINTMENTS.CREATE.title,
    showBackButton: true,
    backUrl: ROUTES.APPOINTMENTS.path,
  });

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleForward = useCallback(() => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <ClientInfo />;
      case 1:
        return <div>Time Slot Selection</div>;
      case 2:
        return <div>Review Details</div>;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (currentStep) {
      case 0:
        return strings.APPOINTMENTS.CREATE.CLIENT_INFO.TITLE;
      case 1:
        return strings.APPOINTMENTS.CREATE.SERVICES.TITLE;
      case 2:
        return strings.APPOINTMENTS.CREATE.REVIEW_AND_SEND.TITLE;
      default:
        return "";
    }
  };

  return (
    <div className={styles.container}>
      <h1>{getTitle()}</h1>
      <Flex className={styles.content} justify="space-between">
        <>
          <Content
            currentStep={currentStep}
            onClickBack={handleBack}
            onClickForward={handleForward}
          >
            {renderStepContent()}
          </Content>
        </>
        <ProgressSteps currentStep={currentStep} />
      </Flex>
    </div>
  );
};

export default CreateAppointments;

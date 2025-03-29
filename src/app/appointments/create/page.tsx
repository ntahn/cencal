"use client";

import React, { useEffect, useState } from "react";
import { Button, Flex } from "antd";
import { ProgressSteps } from "./components";
import { useAppDispatch } from "@/store/hooks";
import { setHeader } from "@/store/features/header/headerSlice";

import { ROUTES, strings } from "@/constants";

import styles from "./createAppointment.module.scss";

const CreateAppointments = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setHeader({
        title: ROUTES.APPOINTMENTS.CREATE.title,
        showBackButton: true,
        backUrl: ROUTES.APPOINTMENTS.path,
      })
    );

    return () => {
      dispatch(
        setHeader({
          title: "",
          showBackButton: false,
          backUrl: "",
        })
      );
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>{strings.APPOINTMENTS.CREATE.CLIENT_INFO.TITLE}</h1>
      <Flex className={styles.content} justify="space-between">
        <div>
          {currentStep > 0 && (
            <Button
              type="default"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Backs
            </Button>
          )}
          {currentStep <= 1 && (
            <Button
              type="default"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </Button>
          )}
          Form
        </div>
        <ProgressSteps currentStep={currentStep} />
      </Flex>
    </div>
  );
};

export default CreateAppointments;

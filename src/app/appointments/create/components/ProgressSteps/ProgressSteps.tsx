import React from "react";
import { Steps } from "antd";

import styles from "./ProgressSteps.module.scss";
import { formProgressSteps } from "@/constants";
import { Card } from "@/components";

type ProgressStepsProps = {
  currentStep: number;
};

export const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  return (
    <Card className={styles.steps}>
      <Steps
        direction="vertical"
        progressDot
        current={currentStep}
        items={formProgressSteps}
      />
    </Card>
  );
};

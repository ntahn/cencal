import { Card } from "@/components";
import React from "react";

import { ProgressButtons } from "../ProgressButtons";
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
  return (
    <Card className={styles.content}>
      {children}
      <ProgressButtons
        currentStep={currentStep}
        onClickBack={onClickBack}
        onClickForward={onClickForward}
      />
    </Card>
  );
};

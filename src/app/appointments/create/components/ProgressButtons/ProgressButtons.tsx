import { Button, Flex } from "antd";
import React from "react";

import styles from "./ProgressButtons.module.scss";

type ProgressButtonsProps = {
  currentStep: number;
  clickForwardDisabled?: boolean;
  onClickBack?: () => void;
  onClickForward?: () => void;
};

export const ProgressButtons = ({
  currentStep,
  clickForwardDisabled = false,
  onClickBack,
  onClickForward,
}: ProgressButtonsProps) => {
  return (
    <Flex
      className={styles.buttonsContainer}
      justify={currentStep === 0 ? "flex-end" : "space-between"}
    >
      {currentStep > 0 && (
        <Button
          className={styles.ghostButton}
          type="default"
          ghost
          onClick={onClickBack}
        >
          Back
        </Button>
      )}
      {currentStep <= 1 && (
        <Button
          className={styles.button}
          type="default"
          disabled={clickForwardDisabled}
          onClick={onClickForward}
        >
          Next
        </Button>
      )}
    </Flex>
  );
};

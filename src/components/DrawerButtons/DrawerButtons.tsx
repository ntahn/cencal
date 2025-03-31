import { Flex, Button } from "antd";
import styles from "./DrawerButtons.module.scss";

interface DrawerButtonsProps {
  leftButtonText: string;
  rightButtonText: string;
  isRightButtonSubmit: boolean;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
}

export const DrawerButtons = ({
  leftButtonText,
  rightButtonText,
  isRightButtonSubmit = false,
  onLeftButtonClick,
  onRightButtonClick,
}: DrawerButtonsProps) => (
  <Flex className={styles.actionButtons} justify="space-between">
    <Button
      className={styles.ghostButton}
      type="default"
      ghost
      onClick={onLeftButtonClick}
    >
      {leftButtonText}
    </Button>
    <Button
      className={styles.button}
      type="default"
      htmlType={isRightButtonSubmit ? "submit" : "button"}
      onClick={onRightButtonClick}
    >
      {rightButtonText}
    </Button>
  </Flex>
);

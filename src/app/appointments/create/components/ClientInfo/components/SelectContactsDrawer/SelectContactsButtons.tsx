import { Flex, Button } from "antd";
import styles from "./SelectContactsDrawer.module.scss";

interface SelectContactsButtonsProps {
  onCancel: () => void;
  onSelect: () => void;
}

export const SelectContactsButtons = ({
  onCancel,
  onSelect,
}: SelectContactsButtonsProps) => (
  <Flex className={styles.actionButtons} justify="space-between">
    <Button
      className={styles.ghostButton}
      type="default"
      ghost
      onClick={onCancel}
    >
      Cancel
    </Button>
    <Button className={styles.button} type="default" onClick={onSelect}>
      Select
    </Button>
  </Flex>
);

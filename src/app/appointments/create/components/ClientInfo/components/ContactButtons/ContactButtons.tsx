import { Button, Flex } from "antd";
import { strings } from "@/constants";
import { ArrowDown, Plus } from "@/assets/icons";

import styles from "./ContactButtons.module.scss";

type ContactButtonsProps = {
  onClickSelect: () => void;
  onClickAdd: () => void;
};

export const ContactButtons = ({
  onClickSelect,
  onClickAdd,
}: ContactButtonsProps) => {
  return (
    <Flex className={styles.buttonsContainer} justify="space-between">
      <Button className={styles.selectContacts} onClick={onClickSelect}>
        <div>{strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.PLACEHOLDER}</div>
        <ArrowDown />
      </Button>
      <Button className={styles.addContact} ghost onClick={onClickAdd}>
        <Plus />
      </Button>
    </Flex>
  );
};

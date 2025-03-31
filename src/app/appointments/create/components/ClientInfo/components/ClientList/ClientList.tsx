import { Flex } from "antd";
import { Cross } from "@/assets/icons";
import { colors } from "@/constants";
import { Contact } from "@/models";

import styles from "./ClientList.module.scss";

type ClientListProps = {
  contacts: Contact[];
  handleRemoveClient: (id: string) => void;
};

export const ClientList = ({
  contacts,
  handleRemoveClient,
}: ClientListProps) => {
  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <Flex className={styles.clientList} align="center" key={contact.id}>
          <div className={styles.description}>Client</div>
          <div className={styles.clientInfo}>{contact.name}</div>
          <div className={styles.clientInfo}>{contact.email}</div>
          <div className={styles.clientInfo}>{contact.phoneNumber}</div>
          <div
            className={styles.action}
            onClick={() => handleRemoveClient(contact.id)}
          >
            <Cross color={colors.red.error} />
          </div>
        </Flex>
      ))}
    </div>
  );
};

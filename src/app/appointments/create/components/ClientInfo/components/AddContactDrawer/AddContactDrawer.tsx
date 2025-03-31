import { Contact } from "@/models";
import { strings } from "@/constants";

import styles from "./AddContactDrawer.module.scss";

type AddContactDrawerProps = {
  contacts: Contact[];
  handleRemoveClient: (id: string) => void;
};

export const AddContactDrawer = ({}: AddContactDrawerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.rule}>
        {strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.RULE}
      </div>
    </div>
  );
};

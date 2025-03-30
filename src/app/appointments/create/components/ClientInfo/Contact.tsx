import { useState } from "react";

import { Button, Flex } from "antd";
import { Drawer } from "@/components";
import { ArrowDown, Plus } from "@/assets/icons";
import { SelectContactsDrawer } from "./components";

// import { useAppSelector } from "@/store";
// import { selectAllContacts } from "@/store/features/contact/contactSlice";

import { strings } from "@/constants";

import styles from "./ClientInfo.module.scss";

// type ContactProps = {};

export const Contact = ({}) => {
  const [isSelectContactsDrawerOpen, setIsSelectContactsDrawerOpen] =
    useState(false);
  //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  //   const contacts = useAppSelector(selectAllContacts);

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.required}>
          {strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.TITLE}
        </div>
        <Flex justify="space-between">
          <Button
            className={styles.selectContacts}
            onClick={() => setIsSelectContactsDrawerOpen(true)}
          >
            <div>
              {strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.PLACEHOLDER}
            </div>
            <ArrowDown />
          </Button>
          <Button
            className={styles.addContact}
            ghost
            // onClick={() => setIsDrawerOpen(true)}
          >
            <Plus />
          </Button>
        </Flex>
      </div>
      <Drawer
        isOpen={isSelectContactsDrawerOpen}
        onClose={() => setIsSelectContactsDrawerOpen(false)}
        width={1130}
        title={strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.DRAWER.TITLE}
      >
        <SelectContactsDrawer
          onCancel={() => setIsSelectContactsDrawerOpen(false)}
        />
      </Drawer>
    </>
  );
};

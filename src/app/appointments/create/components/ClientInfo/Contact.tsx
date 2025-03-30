import { useState } from "react";

import { Drawer } from "@/components";
// import { useAppSelector } from "@/store";
// import { selectAllContacts } from "@/store/features/contact/contactSlice";

import { ArrowDown, Plus } from "@/assets/icons";
import { Button, Flex } from "antd";

import styles from "./ClientInfo.module.scss";
import { SelectContactsDrawer } from "./components/SelectContactsDrawer";

type ContactProps = {};

export const Contact = ({}: ContactProps) => {
  const [isSelectContactsDrawerOpen, setIsSelectContactsDrawerOpen] =
    useState(false);
  //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  //   const contacts = useAppSelector(selectAllContacts);

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.required}>Contact</div>
        <Flex justify="space-between">
          <Button
            className={styles.selectContacts}
            onClick={() => setIsSelectContactsDrawerOpen(true)}
          >
            <div>Select</div>
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
        title="Contact"
      >
        <SelectContactsDrawer />
      </Drawer>
    </>
  );
};

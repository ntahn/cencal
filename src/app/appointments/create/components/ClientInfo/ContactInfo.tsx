import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Drawer } from "@/components";
import {
  ClientList,
  ContactButtons,
  SelectContactsDrawer,
  AddContactDrawer,
} from "./components";

import { Contact } from "@/models";
import { strings } from "@/constants";

import styles from "./ContactInfo.module.scss";

// type ContactProps = {};

export const ContactInfo = ({}) => {
  const { setValue, watch } = useFormContext();
  const [isSelectContactsDrawerOpen, setIsSelectContactsDrawerOpen] =
    useState(false);
  const [isAddContactDrawerOpen, setIsAddContactDrawerOpen] = useState(false);

  const selectedContacts: Contact[] = watch("contacts");

  const handleRemoveClient = (id: string) => {
    const newContacts = selectedContacts.filter((contact) => contact.id !== id);
    setValue("contacts", newContacts);
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.required}>
          {strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.TITLE}
        </div>
        {selectedContacts?.length > 0 ? (
          <ClientList
            contacts={selectedContacts}
            handleRemoveClient={handleRemoveClient}
          />
        ) : (
          <ContactButtons
            onClickSelect={() => setIsSelectContactsDrawerOpen(true)}
            onClickAdd={() => setIsAddContactDrawerOpen(true)}
          />
        )}
      </div>
      <Drawer
        isOpen={isSelectContactsDrawerOpen}
        onClose={() => setIsSelectContactsDrawerOpen(false)}
        width={1130}
        title={
          strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.SELECT_DRAWER.TITLE
        }
      >
        <SelectContactsDrawer
          onCancel={() => setIsSelectContactsDrawerOpen(false)}
        />
      </Drawer>
      <Drawer
        isOpen={isAddContactDrawerOpen}
        onClose={() => setIsAddContactDrawerOpen(false)}
        width={380}
        title={strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.TITLE}
      >
        <AddContactDrawer onCancel={() => setIsAddContactDrawerOpen(false)} />
      </Drawer>
    </>
  );
};

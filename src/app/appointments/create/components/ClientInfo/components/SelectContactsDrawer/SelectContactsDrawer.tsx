import React, { useCallback, useMemo, useState } from "react";

import debounce from "lodash/debounce";

import { SearchHeader } from "./SearchHeader";
import { ContactsTable } from "./ContactsTable";
import { SelectContactsButtons } from "./SelectContactsButtons";

import { useFormContext } from "react-hook-form";
import { useAppSelector } from "@/store";
import { selectAllContacts } from "@/store/features/contact/contactSlice";

import { Contact, ContactTableDataType } from "@/models";

import styles from "./SelectContactsDrawer.module.scss";

type SelectContactsDrawerProps = {
  onCancel: () => void;
  onClickAdd: () => void;
};

export const SelectContactsDrawer = ({
  onCancel,
  onClickAdd,
}: SelectContactsDrawerProps) => {
  const allContacts = useAppSelector(selectAllContacts);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { setValue, watch } = useFormContext();

  const selectedContacts: Contact[] = watch("contacts");

  const selectedRowIds = useMemo(
    () => selectedContacts.map((contact) => contact.id),
    [selectedContacts]
  );

  const filteredContacts = useMemo(() => {
    if (!searchKeyword.trim()) return allContacts;

    const keyword = searchKeyword.toLowerCase();
    return allContacts.filter(
      ({ name, email, phoneNumber }) =>
        name.toLowerCase().includes(keyword) ||
        email.toLowerCase().includes(keyword) ||
        phoneNumber.toLowerCase().includes(keyword)
    );
  }, [allContacts, searchKeyword]);

  const dataSource: ContactTableDataType[] = [...(filteredContacts || [])]?.map(
    ({ id, name, email, phoneNumber }) => ({
      id,
      name,
      email,
      phoneNumber,
    })
  );

  const handleSearch = debounce((value: string) => {
    setSearchKeyword(value);
  }, 500);

  const handleOnSelectChange = useCallback(
    (selectedIds: React.Key[]) => {
      console.log({ selectedIds });
      const newContacts = allContacts.filter((contact) =>
        selectedIds.includes(contact.id)
      );
      setValue("contacts", newContacts);
    },
    [allContacts, setValue]
  );

  return (
    <div className={styles.container}>
      <SearchHeader onSearch={handleSearch} onAddNew={onClickAdd} />
      <ContactsTable
        dataSource={dataSource}
        selectedRowIds={selectedRowIds}
        onChange={handleOnSelectChange}
      />
      <SelectContactsButtons onCancel={onCancel} onSelect={onCancel} />
    </div>
  );
};

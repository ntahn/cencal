import React, { useMemo, useState } from "react";

import debounce from "lodash/debounce";

import { SearchHeader } from "./SearchHeader";
import { ContactsTable } from "./ContactsTable";
import { SelectContactsButtons } from "./SelectContactButtons";

import { useAppSelector } from "@/store";
import { selectAllContacts } from "@/store/features/contact/contactSlice";

import { ContactTableDataType } from "@/models";

import styles from "./SelectContactsDrawer.module.scss";

type SelectContactsDrawerProps = {
  onCancel: () => void;
};

export const SelectContactsDrawer = ({
  onCancel,
}: SelectContactsDrawerProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const contacts = useAppSelector(selectAllContacts);

  const filteredContacts = useMemo(() => {
    if (!searchKeyword.trim()) return contacts;

    const keyword = searchKeyword.toLowerCase();
    return contacts.filter(
      ({ name, email, phoneNumber }) =>
        name.toLowerCase().includes(keyword) ||
        email.toLowerCase().includes(keyword) ||
        phoneNumber.toLowerCase().includes(keyword)
    );
  }, [contacts, searchKeyword]);

  const dataSource: ContactTableDataType[] = [...(filteredContacts || [])]?.map(
    ({ id, name, email, phoneNumber }) => ({
      key: id,
      name,
      email,
      phoneNumber,
    })
  );

  const handleSearch = debounce((value: string) => {
    setSearchKeyword(value);
  }, 500);

  const handleSelectContacts = () => {
    const selectedContacts = contacts.filter(({ id }) =>
      selectedRowKeys.includes(id)
    );

    console.log({ selectedRowKeys, selectedContacts });
  };

  return (
    <div className={styles.container}>
      <SearchHeader onSearch={handleSearch} onAddNew={() => {}} />
      <ContactsTable
        dataSource={dataSource}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
      />
      <SelectContactsButtons
        onCancel={onCancel}
        onSelect={handleSelectContacts}
      />
    </div>
  );
};

import { Table, TableColumnsType } from "antd";
import { ContactTableDataType } from "@/models";

export const contactTableColumns: TableColumnsType<ContactTableDataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phoneNumber",
  },
  Table.SELECTION_COLUMN,
];

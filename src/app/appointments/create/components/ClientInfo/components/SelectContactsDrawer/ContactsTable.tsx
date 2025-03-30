import { Table } from "antd";
import { ContactTableDataType } from "@/models";
import { contactTableColumns } from "@/constants";
import styles from "./SelectContactsDrawer.module.scss";

interface ContactsTableProps {
  dataSource: ContactTableDataType[];
  selectedRowKeys: React.Key[];
  setSelectedRowKeys: (selectedKeys: React.Key[]) => void;
}

export const ContactsTable = ({
  dataSource,
  selectedRowKeys,
  setSelectedRowKeys,
}: ContactsTableProps) => (
  <div className={styles.table}>
    <Table<ContactTableDataType>
      columns={contactTableColumns}
      rowSelection={{
        type: "checkbox",
        columnTitle: "Action",
        columnWidth: 80,
        selectedRowKeys,
        onChange: setSelectedRowKeys,
        renderCell: (_, __, ___, originNode) => (
          <div className={styles.customCheckbox}>{originNode}</div>
        ),
      }}
      dataSource={dataSource}
      pagination={false}
      scroll={{ y: dataSource.length > 7 ? 480 : undefined }}
    />
  </div>
);

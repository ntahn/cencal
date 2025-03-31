import { Table } from "antd";
import { ContactTableDataType } from "@/models";
import { contactTableColumns } from "@/constants";
import styles from "./SelectContactsDrawer.module.scss";

interface ContactsTableProps {
  dataSource: ContactTableDataType[];
  selectedRowIds: React.Key[];
  onChange: (selectedKeys: React.Key[]) => void;
}

export const ContactsTable = ({
  dataSource,
  selectedRowIds,
  onChange,
}: ContactsTableProps) => (
  <div className={styles.table}>
    <Table<ContactTableDataType>
      columns={contactTableColumns}
      rowSelection={{
        type: "checkbox",
        columnTitle: "Action",
        columnWidth: 80,
        selectedRowKeys: selectedRowIds,
        onChange,
        renderCell: (_, __, ___, originNode) => (
          <div className={styles.customCheckbox}>{originNode}</div>
        ),
      }}
      dataSource={dataSource}
      rowKey="id"
      pagination={false}
      scroll={{ y: dataSource.length > 7 ? 480 : undefined }}
    />
  </div>
);

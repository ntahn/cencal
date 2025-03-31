import { Plus, Search } from "@/assets/icons";
import { Flex, Input, Button } from "antd";
import { strings } from "@/constants";
import styles from "./SelectContactsDrawer.module.scss";

interface SearchHeaderProps {
  onSearch: (value: string) => void;
  onAddNew?: () => void;
}

export const SearchHeader = ({ onSearch, onAddNew }: SearchHeaderProps) => (
  <Flex className={styles.buttonContainer} justify="space-between">
    <Input
      className={styles.search}
      placeholder={
        strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.SELECT_DRAWER
          .SEARCH_PLACE_HOLDER
      }
      prefix={<Search />}
      onChange={(e) => onSearch(e.target.value)}
    />
    <Button className={styles.addButton} ghost onClick={onAddNew}>
      <Plus />
    </Button>
  </Flex>
);

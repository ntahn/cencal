import React from "react";
import { Flex } from "antd";

import styles from "./SideBar.module.scss";

export type SideBarItemProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const SideBarItem = ({ label, icon }: SideBarItemProps) => {
  return (
    <Flex className={styles.itemContainer} align="center">
      <Flex className={styles.icon}>{icon}</Flex>
      <Flex className={styles.label}>
        <p>{label}</p>
      </Flex>
    </Flex>
  );
};

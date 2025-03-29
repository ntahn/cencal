import React from "react";
import { Flex } from "antd";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

import styles from "./DashboardWrapper.module.scss";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export const DashboardWrapper = (props: DashboardWrapperProps) => {
  return (
    <div>
      <Header />
      <Flex>
        <SideBar />
        <Flex className={styles.content}>{props.children}</Flex>
      </Flex>
    </div>
  );
};

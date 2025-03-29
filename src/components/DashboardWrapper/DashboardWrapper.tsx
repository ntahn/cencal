import React from "react";
import { Flex } from "antd";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export const DashboardWrapper = (props: DashboardWrapperProps) => {
  return (
    <div>
      <Header />
      <Flex>
        <SideBar />
        {props.children}
      </Flex>
    </div>
  );
};

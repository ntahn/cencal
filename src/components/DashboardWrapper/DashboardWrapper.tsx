import React from "react";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export const DashboardWrapper = (props: DashboardWrapperProps) => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        {props.children}
      </div>
    </div>
  );
};

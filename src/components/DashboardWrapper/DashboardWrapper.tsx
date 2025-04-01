"use client";

import React, { useEffect } from "react";
import { Flex } from "antd";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

import { useAppDispatch } from "@/store";
import { fetchContactsThunk } from "@/store/features/contact";

import styles from "./DashboardWrapper.module.scss";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export const DashboardWrapper = (props: DashboardWrapperProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

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

import React from "react";
import { Flex } from "antd";

import { SideBarItem, SideBarItemProps } from "./SideBarItem";
import {
  AlignTop,
  Calendar,
  Car,
  MoneyBill,
  Package,
  User,
  Currency,
  Newspaper,
} from "@/assets/icons";

import styles from "./SideBar.module.scss";

type SideBarProps = {};

const SIDEBAR_ITEMS: SideBarItemProps[] = [
  {
    label: "Proposals",
    href: "/proposals",
    icon: <AlignTop />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <Car />,
  },
  {
    label: "Vehicle Rules",
    href: "/vehicle-rules",
    icon: <Currency />,
  },
  {
    label: "Appointments",
    href: "/appointments",
    icon: <Calendar />,
  },
  {
    label: "Inventory",
    href: "/inventory",
    icon: <Package />,
  },
  {
    label: "Contacts",
    href: "/contacts",
    icon: <User />,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: <MoneyBill />,
  },
  {
    label: "Invoices",
    href: "/invoices",
    icon: <Newspaper />,
  },
];

export const SideBar = (props: SideBarProps) => {
  return (
    <Flex className={styles.container} vertical>
      {SIDEBAR_ITEMS.map((item) => (
        <SideBarItem
          key={item.href}
          label={item.label}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </Flex>
  );
};

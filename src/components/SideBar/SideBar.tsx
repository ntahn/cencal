"use client";

import React from "react";
import { usePathname } from "next/navigation";
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
import { ROUTES } from "@/constants";

const SIDEBAR_ITEMS: SideBarItemProps[] = [
  {
    label: ROUTES.PROPOSALS.title,
    href: ROUTES.PROPOSALS.path,
    icon: AlignTop,
  },
  {
    label: ROUTES.SERVICES.title,
    href: ROUTES.SERVICES.path,
    icon: Car,
  },
  {
    label: ROUTES.VEHICLE_RULES.title,
    href: ROUTES.VEHICLE_RULES.path,
    icon: Currency,
  },
  {
    label: ROUTES.APPOINTMENTS.title,
    href: ROUTES.APPOINTMENTS.path,
    icon: Calendar,
  },
  {
    label: ROUTES.INVENTORY.title,
    href: ROUTES.INVENTORY.path,
    icon: Package,
  },
  {
    label: ROUTES.CONTACTS.title,
    href: ROUTES.CONTACTS.path,
    icon: User,
  },
  {
    label: ROUTES.TRANSACTIONS.title,
    href: ROUTES.TRANSACTIONS.path,
    icon: MoneyBill,
  },
  {
    label: ROUTES.INVOICES.title,
    href: ROUTES.INVOICES.path,
    icon: Newspaper,
  },
];

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <Flex className={styles.container} vertical>
      {SIDEBAR_ITEMS.map((item) => (
        <SideBarItem
          key={item.href}
          label={item.label}
          href={item.href}
          icon={item.icon}
          selected={pathname.includes(item.href)}
        />
      ))}
    </Flex>
  );
};

"use client";

import React from "react";
import { createPortal } from "react-dom";
import { Flex } from "antd";

import styles from "./Drawer.module.scss";
import { Cross } from "@/assets/icons";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  width?: number;
}

export const Drawer = ({
  isOpen,
  onClose,
  children,
  title,
  width = 400,
}: DrawerProps) => {
  if (typeof window === "undefined" || !isOpen) return null;

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <Flex vertical className={styles.drawer} style={{ width }}>
        {title && (
          <Flex
            className={styles.header}
            justify="space-between"
            align="center"
          >
            <h2>{title}</h2>
            <div onClick={onClose}>
              <Cross />
            </div>
          </Flex>
        )}
        <div className={styles.content}>{children}</div>
      </Flex>
    </>,
    document.body
  );
};

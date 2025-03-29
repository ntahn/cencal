import React from "react";
import Link from "next/link";
import classNames from "classnames";

import { Flex } from "antd";

import { colors } from "@/constants";
import { IconProps } from "@/models";

import styles from "./SideBar.module.scss";

export type SideBarItemProps = {
  label: string;
  href: string;
  icon?: React.ComponentType<IconProps>;
  selected?: boolean;
};

export const SideBarItem = ({
  label,
  href,
  icon: Icon,
  selected,
}: SideBarItemProps) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Flex
        className={classNames(styles.itemContainer, {
          [styles.selected]: selected,
        })}
        align="center"
      >
        <Flex className={styles.icon}>
          {Icon && <Icon color={selected ? colors.blue[600] : undefined} />}
        </Flex>
        <Flex className={styles.label}>
          <p>{label}</p>
        </Flex>
      </Flex>
    </Link>
  );
};

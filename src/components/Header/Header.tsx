import React from "react";
import Image from "next/image";
import { Flex } from "antd";

import { strings } from "@/constants";
import { ArrowLeft } from "@/assets/icons";
import Logo from "@/assets/images/logo.png";

import styles from "./Header.module.scss";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
};

export const Header = ({}: HeaderProps) => {
  return (
    <Flex className={styles.container} align="center">
      <Flex className={styles.logo} align="center" justify="center">
        <Image src={Logo} alt="cencal-logo" width={160} height={26} />
      </Flex>
      <Flex className={styles.title} align="center">
        <button className={styles.buttons}>
          <ArrowLeft />
        </button>
        <div>{strings.appointments.headerTitle}</div>
      </Flex>
    </Flex>
  );
};

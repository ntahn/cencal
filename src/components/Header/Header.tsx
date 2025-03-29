"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Flex } from "antd";
import { ArrowLeft } from "@/assets/icons";
import { selectHeaderState } from "@/store/features/header/headerSlice";
import { getDefaultPageTitle } from "@/utils";

import styles from "./Header.module.scss";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
};

export const Header = ({}: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { title, showBackButton, backUrl } = useSelector(selectHeaderState);

  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl);
    } else {
      router.back();
    }
  };

  const headerTitle = title || getDefaultPageTitle(pathname);

  return (
    <Flex className={styles.container} align="center">
      <Flex className={styles.logo} align="center" justify="center">
        <Image src={Logo} alt="cencal-logo" width={160} height={26} />
      </Flex>
      <Flex className={styles.title} align="center">
        {showBackButton && (
          <button className={styles.buttons} onClick={handleBack}>
            <ArrowLeft />
          </button>
        )}
        <h1>{headerTitle}</h1>
      </Flex>
    </Flex>
  );
};

import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

type DashboardWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: DashboardWrapperProps) => {
  return (
    <div className={classNames(props.className, styles.card)}>
      {props.children}
    </div>
  );
};

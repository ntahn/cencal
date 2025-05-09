import React from "react";
import classNames from "classnames";
import { Input } from "antd";

import styles from "./TextInput.module.scss";

type TextInputProps = {
  title: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
};

export const TextInput = ({
  title,
  placeholder,
  required = false,
  disabled = false,
  errorMessage = "",
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.title, { [styles.required]: required })}
      >
        {title}
      </div>
      <Input
        className={classNames(styles.input, { [styles.error]: !!errorMessage })}
        placeholder={placeholder ?? "Enter"}
        disabled={disabled}
        {...props}
      />
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

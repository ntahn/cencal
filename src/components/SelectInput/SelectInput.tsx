import React from "react";
import classNames from "classnames";
import { Select } from "antd";
import { ArrowDown } from "@/assets/icons";
import { DropdownItem } from "@/models";

import styles from "./SelectInput.module.scss";

type TextInputProps = {
  title: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  showSearch: boolean;
  errorMessage?: string;
  width?: number;
  options: DropdownItem[];
};

export const SelectInput = ({
  title,
  placeholder = "Select",
  showSearch = false,
  required = false,
  disabled = false,
  errorMessage = "",
  width,
  options,
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.title, { [styles.required]: required })}
      >
        {title}
      </div>
      <Select
        style={{ width: width ?? "100%" }}
        className={styles.select}
        showSearch={showSearch}
        status={errorMessage ? "error" : undefined}
        placeholder={placeholder}
        disabled={disabled}
        suffixIcon={<ArrowDown />}
        options={options}
        {...props}
      />
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

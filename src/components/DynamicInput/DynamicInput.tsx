import { SelectInput, TextInput } from "@/components";
import { DropdownItem } from "@/models";

import styles from "./DynamicInput.module.scss";

type DynamicInputProps = {
  isInputDropdownType: boolean;
  title: string;
  required: boolean;
  disabled?: boolean;
  errorMessage?: string;
  dropdownOptions?: DropdownItem[];
};

export const DynamicInput = ({
  isInputDropdownType,
  title,
  required,
  disabled = false,
  errorMessage = "",
  dropdownOptions = [],
  ...props
}: DynamicInputProps) => {
  return (
    <div className={styles.container}>
      {isInputDropdownType ? (
        <SelectInput
          showSearch={true}
          title={title}
          required={required}
          disabled={disabled}
          options={dropdownOptions}
          errorMessage={errorMessage}
          {...props}
        />
      ) : (
        <TextInput
          title={title}
          required={required}
          disabled={disabled}
          errorMessage={errorMessage}
          {...props}
        />
      )}
    </div>
  );
};

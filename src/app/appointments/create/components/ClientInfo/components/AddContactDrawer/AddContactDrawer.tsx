import { useEffect } from "react";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DrawerButtons, TextInput } from "@/components";
import {
  addContactFields,
  AddContactFormData,
  addContactFormDefaultvalues,
  addContactSchema,
  strings,
} from "@/constants";

import styles from "./AddContactDrawer.module.scss";

type AddContactDrawerProps = {
  onCancel: () => void;
};

export const AddContactDrawer = ({ onCancel }: AddContactDrawerProps) => {
  const { setValue } = useFormContext();
  const {
    watch,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm<AddContactFormData>({
    resolver: yupResolver(addContactSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: addContactFormDefaultvalues,
  });

  const watchEmail = watch("email");
  const watchPhoneNumber = watch("phoneNumber");

  useEffect(() => {
    if (watchEmail || watchPhoneNumber)
      trigger(["email", "phoneNumber", "secondPhoneNumber"]);
  }, [watchEmail, watchPhoneNumber, trigger]);

  const onSubmit = handleSubmit((data) => {
    setValue("contacts", [data]);
    onCancel();
  });

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSubmit(e);
        }}
        noValidate
      >
        <div className={styles.rule}>
          {strings.APPOINTMENTS.CREATE.CLIENT_INFO.CONTACT.ADD_DRAWER.RULE}
        </div>
        {addContactFields.map((contactField) => (
          <Controller
            key={contactField.id}
            name={contactField.id as keyof AddContactFormData}
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                title={contactField.title}
                placeholder={contactField.placeholder}
                required={contactField.isRequired}
                errorMessage={errors?.[field.name]?.message}
              />
            )}
          />
        ))}
        <DrawerButtons
          leftButtonText="Cancel"
          rightButtonText="Save"
          isRightButtonSubmit={true}
          onLeftButtonClick={onCancel}
          onRightButtonClick={() => {}}
        />
      </form>
    </div>
  );
};

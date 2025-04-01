import { useEffect } from "react";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { notification } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/store";
import { addContactThunk } from "@/store/features/contact";
import { DrawerButtons, TextInput } from "@/components";
import {
  addContactFields,
  AddContactFormData,
  addContactFormDefaultvalues,
  addContactSchema,
  strings,
} from "@/constants";
import { Contact } from "@/models";

import styles from "./AddContactDrawer.module.scss";

type AddContactDrawerProps = {
  onCancel: () => void;
};

export const AddContactDrawer = ({ onCancel }: AddContactDrawerProps) => {
  const dispatch = useAppDispatch();
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

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await dispatch(addContactThunk(data as Contact));
      notification.success({
        message: "New contact added successfully!",
        placement: "topRight",
        closeIcon: false,
        duration: 3,
      });
      setValue("contacts", [result?.payload], { shouldValidate: true });
    } catch (error) {
      console.log({ error });
    } finally {
      onCancel();
    }
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
              <div className={styles.row}>
                <TextInput
                  {...field}
                  title={contactField.title}
                  placeholder={contactField.placeholder}
                  required={contactField.isRequired}
                  errorMessage={errors?.[field.name]?.message}
                />
              </div>
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

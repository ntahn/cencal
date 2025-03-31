import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { DynamicInput } from "@/components";
import { Flex } from "antd";

import {
  strings,
  vehicleMakes,
  vehicleModels,
  vehicleTypes,
  years,
} from "@/constants";
import { ClientInfoFormData } from "@/models";

import styles from "./VehicleInfo.module.scss";

export const VehicleInfo = ({}) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<ClientInfoFormData>();
  const [isFormDropdownType, setIsFormDropdownType] = useState(true);

  const watchVehicleMake = watch("vehicle.vehicleMake");

  const getVehicleModels = () => {
    if (!watchVehicleMake) {
      return [];
    }

    const models =
      vehicleModels[watchVehicleMake as keyof typeof vehicleModels];
    if (!models || !Array.isArray(models)) {
      return [];
    }

    return models;
  };

  const getSwitchButtonText = () =>
    isFormDropdownType
      ? `Can't find a vehicle? Enter it manually.`
      : `I prefer to pick from the available Vehicle options.`;

  return (
    <div className={styles.container}>
      <div className={styles.required}>
        {strings.APPOINTMENTS.CREATE.CLIENT_INFO.VEHICLE.TITLE}
      </div>
      <div className={styles.vehicleContainer}>
        <Flex className={styles.vehicleRow1} gap={16}>
          <Controller
            name="vehicle.vehicleYear"
            control={control}
            render={({ field }) => (
              <DynamicInput
                {...field}
                isInputDropdownType={isFormDropdownType}
                title="Year"
                required={true}
                dropdownOptions={years}
                errorMessage={errors?.vehicle?.vehicleYear?.message}
              />
            )}
          />
          <Controller
            name="vehicle.vehicleMake"
            control={control}
            render={({ field }) => (
              <DynamicInput
                {...field}
                isInputDropdownType={isFormDropdownType}
                title="Make"
                required={true}
                dropdownOptions={vehicleMakes}
                errorMessage={errors?.vehicle?.vehicleMake?.message}
              />
            )}
          />
        </Flex>
        <div className={styles.vehicleRowFull}>
          <Controller
            name="vehicle.vehicleModel"
            control={control}
            render={({ field }) => (
              <DynamicInput
                {...field}
                isInputDropdownType={isFormDropdownType}
                title="Model"
                disabled={
                  isFormDropdownType &&
                  (!watchVehicleMake || watchVehicleMake?.length === 0)
                }
                required={true}
                dropdownOptions={getVehicleModels()}
                errorMessage={errors?.vehicle?.vehicleModel?.message}
              />
            )}
          />
        </div>
        <div className={styles.vehicleRowFull}>
          <Controller
            name="vehicle.vehicleType"
            control={control}
            render={({ field }) => (
              <DynamicInput
                {...field}
                isInputDropdownType={isFormDropdownType}
                title="Vehicle Type"
                required={true}
                dropdownOptions={vehicleTypes}
                errorMessage={errors?.vehicle?.vehicleType?.message}
              />
            )}
          />
        </div>
      </div>
      <div
        className={styles.switchInputTypeButton}
        onClick={() => setIsFormDropdownType(!isFormDropdownType)}
      >
        {getSwitchButtonText()}
      </div>
    </div>
  );
};

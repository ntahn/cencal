"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setHeader } from "@/store/features/header/headerSlice";

import { ROUTES } from "@/constants";

const CreateAppointments = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setHeader({
        title: ROUTES.APPOINTMENTS.CREATE.title,
        showBackButton: true,
        backUrl: ROUTES.APPOINTMENTS.path,
      })
    );

    return () => {
      dispatch(
        setHeader({
          title: "",
          showBackButton: false,
          backUrl: "",
        })
      );
    };
  }, [dispatch]);

  return <div>Create Appointments</div>;
};

export default CreateAppointments;

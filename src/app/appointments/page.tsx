"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";

const Appointments = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push("/appointments/create");
  };

  return (
    <div>
      <Button type="primary" onClick={handleCreateClick}>
        Create Appointment
      </Button>
    </div>
  );
};

export default Appointments;

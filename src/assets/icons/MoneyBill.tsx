import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const MoneyBill = ({
  width = 20,
  height = 20,
  color = colors.gray[300],
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.125 5H1.875a.625.625 0 0 0-.625.625v8.75c0 .345.28.625.625.625h16.25c.345 0 .625-.28.625-.625v-8.75A.625.625 0 0 0 18.125 5Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM13.75 5l5 4.375M13.75 15l5-4.375M6.25 5l-5 4.375M6.25 15l-5-4.375"
    />
  </svg>
);

import * as React from "react";
import { IconProps } from "@/models";

export const ArrowLeft = ({
  width = 20,
  height = 20,
  color = "#858585",
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
      d="M16.875 10H3.125M8.75 4.375 3.125 10l5.625 5.625"
    />
  </svg>
);

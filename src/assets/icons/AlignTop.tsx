import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const AlignTop = ({
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
      d="M16.875 3.125H3.125M15.625 13.75v-7.5A.625.625 0 0 0 15 5.625h-3.125a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625H15c.345 0 .625-.28.625-.625ZM8.125 5.625H5a.625.625 0 0 0-.625.625v10.625c0 .345.28.625.625.625h3.125c.345 0 .625-.28.625-.625V6.25a.625.625 0 0 0-.625-.625Z"
    />
  </svg>
);

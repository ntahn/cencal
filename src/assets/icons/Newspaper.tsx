import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const Newspaper = ({
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
      d="M7.5 8.75h6.25M7.5 11.25h6.25M2.5 15.625a1.25 1.25 0 0 0 1.25-1.25V5a.625.625 0 0 1 .625-.625h12.5A.625.625 0 0 1 17.5 5v9.375a1.25 1.25 0 0 1-1.25 1.25H2.5ZM2.5 15.625a1.25 1.25 0 0 1-1.25-1.25v-7.5"
    />
  </svg>
);

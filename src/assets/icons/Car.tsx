import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const Car = ({
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
      d="M1.25 9.375h17.5M17.5 14.375v1.875a.624.624 0 0 1-.625.625H15a.624.624 0 0 1-.625-.625v-1.875"
    />
    <path
      fill={color}
      d="M5.625 14.375v1.875a.625.625 0 0 1-.625.625H3.125a.625.625 0 0 1-.625-.625v-1.875"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.625 14.375v1.875a.625.625 0 0 1-.625.625H3.125a.625.625 0 0 1-.625-.625v-1.875M5 11.875h1.25M13.75 11.875H15"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.5 9.375-2.336-5.25a.625.625 0 0 0-.57-.375H5.406a.625.625 0 0 0-.57.375L2.5 9.375v5h15v-5Z"
    />
  </svg>
);

import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const User = ({
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
      d="M10 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.422 16.875a8.75 8.75 0 0 1 15.156 0"
    />
  </svg>
);

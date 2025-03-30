import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const ArrowDown = ({
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
      fill={color}
      fillRule="evenodd"
      d="M4.558 7.058a.625.625 0 0 1 .884 0L10 11.616l4.558-4.558a.625.625 0 1 1 .884.884l-5 5a.625.625 0 0 1-.884 0l-5-5a.625.625 0 0 1 0-.884Z"
      clipRule="evenodd"
    />
  </svg>
);

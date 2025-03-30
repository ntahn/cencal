import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const Search = ({
  width = 24,
  height = 24,
  color = colors.gray[500],
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
      d="M11.5 3.75a7.75 7.75 0 1 0 5.379 13.33.755.755 0 0 1 .2-.201A7.75 7.75 0 0 0 11.5 3.75Zm7.05 13.739a9.213 9.213 0 0 0 2.2-5.989 9.25 9.25 0 1 0-3.261 7.05l2.98 2.98a.75.75 0 1 0 1.061-1.06l-2.98-2.981Z"
      clipRule="evenodd"
    />
  </svg>
);

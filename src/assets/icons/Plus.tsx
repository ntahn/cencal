import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const Plus = ({
  width = 20,
  height = 20,
  color = colors.blue[400],
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M17.5 10a.624.624 0 0 1-.625.625h-6.25v6.25a.624.624 0 1 1-1.25 0v-6.25h-6.25a.625.625 0 1 1 0-1.25h6.25v-6.25a.625.625 0 0 1 1.25 0v6.25h6.25A.625.625 0 0 1 17.5 10Z"
    />
  </svg>
);

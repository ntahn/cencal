import * as React from "react";
import { colors } from "@/constants";
import { IconProps } from "@/models";

export const Currency = ({
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
      d="M10 1.875A8.125 8.125 0 1 0 18.125 10 8.133 8.133 0 0 0 10 1.875Zm0 15A6.875 6.875 0 1 1 16.875 10 6.883 6.883 0 0 1 10 16.875Zm3.125-5.313a2.188 2.188 0 0 1-2.188 2.188h-.312v.625a.624.624 0 1 1-1.25 0v-.625h-1.25a.625.625 0 1 1 0-1.25h2.813a.938.938 0 0 0 0-1.875H9.062a2.188 2.188 0 0 1 0-4.375h.313v-.625a.625.625 0 0 1 1.25 0v.625h1.25a.625.625 0 1 1 0 1.25H9.062a.937.937 0 1 0 0 1.875h1.876a2.187 2.187 0 0 1 2.187 2.188Z"
    />
  </svg>
);

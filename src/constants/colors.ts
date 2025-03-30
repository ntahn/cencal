export const colors = {
  background: "#0f0f0f",
  foreground: "#ffffff",
  border: "#2f323e",
  gray: {
    300: "#C6C8D2",
    400: "#858585",
    500: "#7F859F",
    600: "#2F323E",
    700: "#212226",
    800: "#18181B",
  },
  blue: {
    400: "#058CD7",
    600: "#2e7ff1",
  },
  red: {
    require: "#F64D3C",
  },
};

// Type for accessing colors
export type ColorKeys = keyof typeof colors;
export type GrayKeys = keyof typeof colors.gray;
export type BlueKeys = keyof typeof colors.blue;
export type RedKeys = keyof typeof colors.red;

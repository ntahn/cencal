export const colors = {
  background: "#0f0f0f",
  foreground: "#ffffff",
  border: "#2f323e",
  gray: {
    300: "#C6C8D2",
    400: "#858585",
    700: "#212226",
  },
};

// Type for accessing colors
export type ColorKeys = keyof typeof colors;
export type GrayKeys = keyof typeof colors.gray;

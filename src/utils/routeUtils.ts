import { ROUTES } from "@/constants";

export const getDefaultPageTitle = (pathName: string) =>
  Object.values(ROUTES).find((item) => item.path === pathName)?.title || "";

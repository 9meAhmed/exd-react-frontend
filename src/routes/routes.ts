export const RoutePath = {
  HOME: "/",
  AUTH: "auth",
  LOGIN: "login",
  REGISTER: "register",
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];

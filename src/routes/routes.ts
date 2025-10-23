export const RoutePath = {
  HOME: "/",
  AUTH: "auth",
  LOGIN: "auth/login",
  REGISTER: "auth/register",
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];

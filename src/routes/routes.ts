export const RoutePath = {
  HOME: "/",
  AUTH: "auth",
  LOGIN: "login",
  REGISTER: "register",
  OTP: "otp",
  FORGOT_PASSWORD: "forgot-password",
  RESET_PASSWORD: "reset-password",
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];

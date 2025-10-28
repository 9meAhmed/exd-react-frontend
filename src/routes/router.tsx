import { createBrowserRouter } from "react-router";

import { AuthPage, App } from "@pages/index";

import LoginForm from "@features/auth/LoginForm";
import SignupForm from "@features/auth/SignupForm";
import OtpForm from "@features/auth/OtpForm";
import { RoutePath } from "./routes";

const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
    Component: App,
  },
  {
    path: RoutePath.AUTH,
    Component: AuthPage,
    children: [
      { index: true, Component: LoginForm },
      { path: RoutePath.LOGIN, Component: LoginForm },
      { path: RoutePath.REGISTER, Component: SignupForm },
      { path: RoutePath.OTP, Component: OtpForm },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";

import { AuthPage, App } from "@pages/index";

import LoginForm from "@features/auth/LoginForm";
import SignupForm from "@features/auth/SignupForm";
import OtpForm from "@features/auth/OtpForm";
import { RoutePath } from "./routes";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";
import ResetPasswordForm from "@/features/auth/ResetPasswordForm";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    Component: ProtectedRoute,
    children: [{ path: "/", element: <App /> }],
  },
  {
    path: RoutePath.AUTH,
    Component: AuthPage,
    children: [
      { index: true, Component: LoginForm },
      { path: RoutePath.LOGIN, Component: LoginForm },
      { path: RoutePath.REGISTER, Component: SignupForm },
      { path: RoutePath.OTP, Component: OtpForm },
      { path: RoutePath.FORGOT_PASSWORD, Component: ForgotPasswordForm },
      { path: RoutePath.RESET_PASSWORD, Component: ResetPasswordForm },
    ],
  },
]);

export default router;

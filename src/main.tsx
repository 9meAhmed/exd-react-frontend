import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";



import App from "./App.jsx";
import AuthPage from "./pages/AuthPage.js";
import LoginForm from "./features/auth/LoginForm.js";
import SignupForm from "./features/auth/SignupForm.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: AuthPage },
      {
        path: "auth",
        Component: AuthPage,
        children: [
          { index: true, Component: LoginForm },
          { path: "register", Component: SignupForm },
        ],
      },]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
);

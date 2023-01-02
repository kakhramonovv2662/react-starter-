import React from "react";

const authRoute = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: React.lazy(() => import("@/modules/auth")),
    authority: [],
  },
  {
    key: "signUp",
    path: `/sign-up`,
    component: React.lazy(() => import("@/modules/auth/routes/SignUp")),
    authority: [],
  },
  {
    key: "forgotPassword",
    path: `/forgot-password`,
    component: React.lazy(() => import("@/modules/auth/routes/ForgotPassword")),
    authority: [],
  },
  {
    key: "resetPassword",
    path: `/reset-password`,
    component: React.lazy(() => import("@/modules/auth/routes/ResetPassword")),
    authority: [],
  },
];

export default authRoute;

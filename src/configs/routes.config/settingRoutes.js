import React from "react";

export const settingRoutes = [
  {
    title: "profile",
    path: "/profile",
    component: React.lazy(() => import("@setting/containers/Profile/Profile")),
  },
  {
    title: "password",
    path: "/password",
    component: React.lazy(
      () => import("@setting/containers/Password/Password")
    ),
  },
];

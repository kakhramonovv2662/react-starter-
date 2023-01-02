import React from "react";

export const storeRoutes = [
  {
    title: "about",
    path: "/about",
    component: React.lazy(() => import("@stores/containers/About/About")),
  },
  {
    title: "address",
    path: "/address",
    component: React.lazy(() => import("@stores/containers/Address/Address")),
  },
  // {
  //   title: "photos",
  //   path: "/photos",
  //   component: React.lazy(() => import("@stores/containers/Photos/Photos")),
  // },
  {
    title: "users",
    path: "/users",
    component: React.lazy(() => import("@stores/containers/Users/Users")),
  },
  // {
  //   title: "history",
  //   path: "/history",
  //   component: React.lazy(() => import("@stores/containers/History/History")),
  // },
];

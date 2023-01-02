import React from "react";
import authRoute from "./authRoute";

export const publicRoutes = [...authRoute];

export const protectedRoutes = [
  {
    key: "main.dashboard",
    path: "/dashboard",
    component: React.lazy(() => import("@/modules/dashboard")),
    authority: [],
  },
  {
    key: "main.stores",
    path: "/stores",
    component: React.lazy(() => import("@/modules/stores")),
    authority: [],
  },
  {
    key: "main.stores",
    path: "/stores/form/*",
    component: React.lazy(() => import("@/modules/stores/routes/AddStore")),
    authority: [],
  },
  {
    key: "main.users",
    path: "/users",
    component: React.lazy(() => import("@/modules/users")),
    authority: [],
  },
  {
    key: "pricing.tariffs",
    path: "/tariffs",
    component: React.lazy(() => import("@/modules/tariffs")),
    authority: [],
  },
  {
    key: "pricing.features",
    path: "/features/*",
    component: React.lazy(() => import("@/modules/features")),
    authority: [],
  },
  {
    key: "settings.storeCategories",
    path: "/store-categories",
    component: React.lazy(() => import("@/modules/store-categories")),
    authority: [],
  },
  {
    key: "settings.countries",
    path: "/countries",
    component: React.lazy(() => import("@/modules/countries")),
    authority: [],
  },
  {
    key: "settings.currencies",
    path: "/currencies",
    component: React.lazy(() => import("@/modules/currencies")),
    authority: [],
  },
  {
    key: "profile",
    path: "/profile",
    component: React.lazy(() => import("@stores/containers/About/About")),
    authority: [],
  },
  {
    key: "account",
    path: "/account-setting/*",
    component: React.lazy(
      () => import("@/modules/setting/routes/SettingRoute")
    ),
    authority: [],
  },
  {
    key: "activity",
    path: "/activity-log",
    component: React.lazy(() => import("@stores/containers/Photos/Photos")),
    authority: [],
  },
];

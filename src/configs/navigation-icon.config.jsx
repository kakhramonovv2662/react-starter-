import { SvgIcon } from "@/components/svgIcon";
import React from "react";
import { AiFillHome, ImPriceTag, IoSettingsSharp } from "react-icons/all";

const navigationIcon = {
  main: <AiFillHome />,
  pricing: <ImPriceTag />,
  settings: <IoSettingsSharp />,
  dashboard: <SvgIcon iconName="dashboard" width="24" height="24" />,
  stores: <SvgIcon iconName="store" width="24" height="24" />,
  users: <SvgIcon iconName="users" width="24" height="24" />,
  tariffs: <SvgIcon iconName="tariff" width="24" height="24" />,
  features: <SvgIcon iconName="feature" width="24" height="24" />,
  storeCategories: <SvgIcon iconName="shopping-cart" width="24" height="24" />,
  countries: <SvgIcon iconName="flag" width="24" height="24" />,
  currencies: <SvgIcon iconName="currency" width="24" height="24" />,
};

export default navigationIcon;

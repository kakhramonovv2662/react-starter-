import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useThemeSlice } from "@/store/theme/themeSlice";
import { useCommon } from "@/store/base";

const AppRoute = ({ component: Component, routeKey, ...props }) => {
  const setCurrentRouteKey = useCommon((state) => state.setCurrentRouteKey);
  const setLayout = useThemeSlice((state) => state.setLayout);
  const setPreviousLayout = useThemeSlice((state) => state.setPreviousLayout);
  const location = useLocation();

  const layoutType = useThemeSlice((state) => state.data?.layout?.type);
  const previousLayout = useThemeSlice(
    (state) => state.data.layout?.previousType
  );

  const handleLayoutChange = useCallback(() => {
    setCurrentRouteKey(routeKey);

    if (props.layout && props.layout !== layoutType) {
      setPreviousLayout(layoutType);
      setLayout(props.layout);
    }

    if (!props.layout && previousLayout && layoutType !== previousLayout) {
      setLayout(previousLayout);
      setPreviousLayout("");
    }
  }, [layoutType, previousLayout, props.layout, routeKey]);

  useEffect(() => {
    handleLayoutChange();
  }, [location, handleLayoutChange]);

  return <Component {...props} />;
};

export default AppRoute;

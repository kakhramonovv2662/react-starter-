import create from "zustand";
import { themeConfig } from "@/configs/theme.config";
import { persist } from "zustand/middleware";
import {
  LAYOUT_TYPE_MODERN,
  LAYOUT_TYPE_CLASSIC,
  LAYOUT_TYPE_STACKED_SIDE,
  NAV_MODE_TRANSPARENT,
  NAV_MODE_LIGHT,
  NAV_MODE_DARK,
  NAV_MODE_THEMED,
  MODE_DARK,
  MODE_LIGHT,
  LAYOUT_TYPE_DECKED,
} from "@/constants/theme.constant";
const initialState = {
  themeColor: themeConfig.themeColor,
  direction: themeConfig.direction,
  mode: themeConfig.mode,
  locale: themeConfig.locale,
  primaryColorLevel: themeConfig.primaryColorLevel,
  panelExpand: themeConfig.panelExpand,
  navMode: themeConfig.navMode,
  layout: themeConfig.layout,
  cardBordered: null,
};

const availableNavColorLayouts = [
  LAYOUT_TYPE_CLASSIC,
  LAYOUT_TYPE_STACKED_SIDE,
  LAYOUT_TYPE_DECKED,
];

export const useThemeSlice = create(
  persist(
    (set) => ({
      data: initialState,
      //Edit Theme Direction
      setDirection: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            direction: value,
          },
        })),
      //Edit Theme Mode
      setMode: (value) =>
        set(({ data }) => {
          const availableColorNav = availableNavColorLayouts.includes(
            data?.layout?.type
          );

          if (
            availableColorNav &&
            value === MODE_DARK &&
            data?.navMode !== NAV_MODE_THEMED
          ) {
            data.navMode = NAV_MODE_DARK;
          }
          if (
            availableColorNav &&
            value === MODE_LIGHT &&
            data?.navMode !== NAV_MODE_THEMED
          ) {
            data.navMode = NAV_MODE_LIGHT;
          }
          return {
            data: {
              ...data,
              mode: value,
            },
          };
        }),
      //Edit Lang
      setLang: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            locale: value,
          },
        })),
      //Edit Theme Layout
      setLayout: (value) =>
        set(({ data }) => {
          let customData = { ...data };
          customData.cardBordered = value === LAYOUT_TYPE_MODERN;
          if (value === LAYOUT_TYPE_MODERN) {
            customData.navMode = NAV_MODE_TRANSPARENT;
          }

          const availableColorNav = availableNavColorLayouts.includes(value);

          if (availableColorNav && customData?.mode === MODE_LIGHT) {
            customData.navMode = NAV_MODE_LIGHT;
          }

          if (availableColorNav && customData?.mode === MODE_DARK) {
            customData.navMode = NAV_MODE_DARK;
          }
          return {
            data: {
              ...customData,
              layout: {
                ...customData.layout,
                ...{
                  type: value,
                },
              },
            },
          };
        }),
      setPreviousLayout: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            layout: {
              ...data?.layout,
              previousType: value,
            },
          },
        })),
      setSideNavCollapse: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            layout: {
              ...data?.layout,
              sideNavCollapse: value,
            },
          },
        })),
      setNavMode: (value) =>
        set(({ data }) => {
          let customData = { ...data };
          if (value !== "default") {
            customData.navMode = value;
          } else {
            if (customData?.layout?.type === LAYOUT_TYPE_MODERN) {
              customData.navMode = NAV_MODE_TRANSPARENT;
            }

            const availableColorNav = availableNavColorLayouts.includes(
              customData?.layout?.type
            );

            if (availableColorNav && customData.mode === MODE_LIGHT) {
              customData.navMode = NAV_MODE_LIGHT;
            }

            if (availableColorNav && customData.mode === MODE_DARK) {
              customData.navMode = NAV_MODE_DARK;
            }
          }

          return {
            data: customData,
          };
        }),
      setPanelExpand: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            panelExpand: value,
          },
        })),
      setThemeColor: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            themeColor: value,
          },
        })),
      setThemeColorLevel: (value) =>
        set(({ data }) => ({
          data: {
            ...data,
            primaryColorLevel: value,
          },
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default initialState;

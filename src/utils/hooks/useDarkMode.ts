import { useEffect } from "react";
import { MODE_DARK, MODE_LIGHT } from "@/constants/theme.constant";
import { useThemeSlice } from "../../store/theme/themeSlice";
import { ThemeModeType } from "../../types";

function useDarkMode() {
  const setMode = useThemeSlice((state) => state?.setMode);
  const mode = useThemeSlice((state) => state?.data?.mode);

  const isEnabled = mode === MODE_DARK;

  const onModeChange = (mode: ThemeModeType) => setMode(mode);

  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    root.classList.remove(isEnabled ? MODE_LIGHT : MODE_DARK);
    root.classList.add(isEnabled ? MODE_DARK : MODE_LIGHT);
  }, [isEnabled]);

  return [isEnabled, onModeChange];
}

export default useDarkMode;

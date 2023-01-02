import { useEffect } from "react";
import { useThemeSlice } from "../../store/theme/themeSlice";
import { ThemeDirectionType } from "../../types";

function useDirection() {
  const setDirection = useThemeSlice((state) => state.setDirection);
  const direction = useThemeSlice((state) => state.data.direction);

  const updateDirection = (dir: ThemeDirectionType) => setDirection(dir);

  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    root.setAttribute("dir", direction);
  }, [direction]);

  return [direction, updateDirection];
}

export default useDirection;

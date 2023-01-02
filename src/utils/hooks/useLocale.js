import { useEffect } from "react";
import i18n from "i18next";
import { dateLocales } from "@/locales";
import dayjs from "dayjs";
import { useThemeSlice } from "../../store/theme/themeSlice";

function useLocale() {
  const locale = useThemeSlice((state) => state.data.locale);

  useEffect(() => {
    const formattedLang = locale.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    if (locale !== i18n.language) {
      i18n.changeLanguage(formattedLang);
    }
    dateLocales[formattedLang]().then(() => {
      dayjs.locale(formattedLang);
    });
  }, [locale]);

  return locale;
}

export default useLocale;

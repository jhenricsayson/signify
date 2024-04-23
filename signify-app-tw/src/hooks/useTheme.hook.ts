import { useSettingsStore } from "@/store";

export const useTheme = () => {
  const { SET_DARK_THEME, isDarkTheme } = useSettingsStore();

  const handleSetDark = async (isDark: boolean) => {
    SET_DARK_THEME(!isDark);
  };

  return {
    isDarkTheme,
    handleSetDark,
  };
};

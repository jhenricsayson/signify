export type FontTypes = "archivoblack" | "bobbyjonessoft" | "comincsans" | "impact" | "sailors";

export type SettingsStore = {
  globalFont: FontTypes;
  isDarkTheme: boolean;
  speed: number;
  SET_GLOBAL_FONT: (fontName: FontTypes) => void;
  SET_DARK_THEME: (isDark: boolean) => void;
  SET_SPEED: (speed: number) => void;
};

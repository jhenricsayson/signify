import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { SettingsStore } from "@/types/store";

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      isDarkTheme: false,
      globalFont: "impact",
      speed: 1,
      SET_GLOBAL_FONT: (fontName: SettingsStore["globalFont"]) => set({ globalFont: fontName }),
      SET_DARK_THEME: (isDark: boolean) => set({ isDarkTheme: isDark }),
      SET_SPEED: (speed: number) => set({ speed }),
    }),
    {
      name: "settings-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

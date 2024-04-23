import React from "react";
import { useSettingsStore } from "@/store";
import { FontTypes } from "@/types/store";

export const useGlobalFonts = () => {
  const { SET_GLOBAL_FONT, globalFont } = useSettingsStore();

  const handleSetFont = async (fontName: FontTypes) => {
    const transformFontName = fontName.toLowerCase().replaceAll("-", "");
    SET_GLOBAL_FONT(transformFontName as FontTypes);
  };

  return {
    globalFont,
    handleSetFont,
  };
};

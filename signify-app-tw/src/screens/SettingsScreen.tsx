import React from "react";
import { View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppLayout } from "@/layouts";
import { SettingsModal } from "@/components";
import { useGlobalFonts, useTheme } from "@/hooks";
import { useSettingsStore } from "@/store";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "SETTINGS_SCREEN">;
};

const menu = [
  {
    label: "FONTS",
    type: "fonts",
  },
  {
    label: "EYE COMFORT",
    type: "eye-comfort",
  },
  {
    label: "THEME",
    type: "color-theme",
  },
  {
    label: "SPEED",
    type: "speed",
  },
];

export const SettingsScreen: React.FC<TScreenProps> = (props) => {
  const { globalFont } = useGlobalFonts();
  const { isDarkTheme } = useTheme();

  const [settingsModal, setSettingsModal] = React.useState<any>({
    open: false,
    selectedType: undefined,
  });

  const handleSettingsModal = (type: string) => {
    setSettingsModal({
      open: true,
      selectedType: type,
    });
  };

  const handleCloseSettingsModal = () => {
    setSettingsModal({
      open: false,
      selectedType: undefined,
    });
  };

  return (
    <React.Fragment>
      <AppLayout showTopnav canGoBack>
        <View className={`flex-auto flex justify-center items-center gap-4 ${isDarkTheme ? "bg-primary" : ""}`}>
          {menu.map((item) => (
            <Pressable
              className="w-3/4 border border-gray-600 rounded-lg py-3"
              key={`home-menu-${item.label.toLowerCase()}`}
              onPress={() => handleSettingsModal(item.type)}
            >
              <Text style={{ fontFamily: globalFont }} className="text-center text-gray-600 font-bold">
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </AppLayout>

      <SettingsModal open={settingsModal.open} type={settingsModal.selectedType} handleClose={handleCloseSettingsModal} />
    </React.Fragment>
  );
};

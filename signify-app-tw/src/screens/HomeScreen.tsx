import React from "react";
import { View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useGlobalFonts } from "@/hooks";
import { AppLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

const menu = [
  {
    label: "TRANSLATE",
    to: "TRANSLATE_SCREEN",
  },
  {
    label: "ALPHABET",
    to: "ALPHABET_SCREEN",
  },
  {
    label: "SETTINGS",
    to: "SETTINGS_SCREEN",
  },
];

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  const { globalFont } = useGlobalFonts();
  const handleRedirect = (to: string) => {
    // @ts-ignore
    props.navigation.navigate(to);
  };

  return (
    <AppLayout showTopnav>
      <View className="flex-auto flex justify-center items-center gap-4">
        {menu.map((item) => (
          <Pressable
            className="w-3/4 border border-gray-600 rounded-lg py-3"
            key={`home-menu-${item.label.toLowerCase()}`}
            onPress={() => handleRedirect(item.to)}
          >
            <Text style={{ fontFamily: globalFont }} className="text-center text-gray-600 font-bold">
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </AppLayout>
  );
};

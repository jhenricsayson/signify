import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useGlobalFonts } from "@/hooks";
import { ImageAssets } from "@/assets/image-assets";
import { THEME_COLORS } from "@/theme";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "WELCOME_SCREEN">;
};

const imageUri = ImageAssets.welcomeScreenBg;

export const WelcomeScreen: React.FC<TScreenProps> = (props) => {
  const { globalFont } = useGlobalFonts();

  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("HOME_SCREEN");
    }, 1000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary2">
      <Image source={imageUri} resizeMode="contain" className="h-[300px] aspect-auto mb-20" />
      <ActivityIndicator size="large" color={THEME_COLORS.primary5} />
      <Text style={{ fontFamily: globalFont }} className="text-gray-500 font-bold mt-10">
        v1.0.0.1 (beta)
      </Text>
    </View>
  );
};

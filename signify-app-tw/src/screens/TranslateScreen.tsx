import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useGlobalFonts } from "@/hooks";
import { AppLayout } from "@/layouts";

const embedUrl = "https://sign.mt/";

export const TranslateScreen: React.FC = () => {
  const { globalFont } = useGlobalFonts();

  return (
    <AppLayout showTopnav canGoBack hideLogo>
      <View className="flex-auto flex flex-col gap-3 items-center">
        <Text style={{ fontFamily: globalFont }} className="font-bold text-2xl text-center">
          TRANSLATE
        </Text>
        <Image source={require("@/assets/images/stick-man.png")} resizeMethod="resize" resizeMode="contain" className="h-[400px] w-[300px]" />
        <TextInput className="bg-white w-3/4 py-2 px-4 rounded border border-gray-600" placeholder="Enter words ..." />
        <View className="flex flex-col items-center gap-2 w-full">
          <Pressable className="w-2/4 py-3">
            <Text style={{ fontFamily: globalFont }} className="text-center">
              <Feather name="mic" size={32} />
            </Text>
          </Pressable>
          <Pressable className="bg-primary rounded w-2/4 py-3">
            <Text style={{ fontFamily: globalFont }} className="text-gray-800 text-center text-md">
              Process to handsign
            </Text>
          </Pressable>
        </View>
      </View>
    </AppLayout>
  );
};

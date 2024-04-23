import React from "react";
import { View, ScrollView, Image } from "react-native";
import { ImageAssets } from "@/assets/image-assets";
import { Topnav } from "@/components/shared";
import { useTheme } from "@/hooks";

type Props = {
  children: React.ReactNode;
  showTopnav: boolean;
  canGoBack?: boolean;
  scrollable?: boolean;
  hideLogo?: boolean;
};

export const AppLayout: React.FC<Props> = (props) => {
  const { isDarkTheme } = useTheme();
  const imageUri = ImageAssets.welcomeScreenBgCropped;

  return (
    <View className={`flex w-full h-full ${isDarkTheme ? "bg-primary" : "bg-primary2"} p-3`}>
      {props.showTopnav ? <Topnav showGoBack={props.canGoBack} /> : null}
      {!props.hideLogo ? (
        <View className="flex-none">
          <View className="flex justify-center items-center">
            <Image source={imageUri} resizeMode="contain" className="aspect-ratio h-[120px] w-[120px]" />
          </View>
        </View>
      ) : null}
      <View className="flex-auto">{props.scrollable ? <ScrollView>{props.children}</ScrollView> : props.children}</View>
    </View>
  );
};

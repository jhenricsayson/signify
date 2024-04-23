import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  showGoBack?: boolean;
};

export const Topnav: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    return navigation.goBack();
  };

  const handleRedirect = (to: string) => {
    // @ts-ignore
    return navigation.navigate(to);
  };

  return (
    <View className="w-full flex flex-row justify-between items-center">
      {props.showGoBack ? (
        <Pressable>
          <Feather name="arrow-left" size={30} onPress={handleGoBack} />
        </Pressable>
      ) : (
        <Pressable onPress={() => handleRedirect("ABOUT_SCREEN")}>
          <Feather name="info" size={30} />
        </Pressable>
      )}

      <Pressable onPress={() => handleRedirect("SETTINGS_SCREEN")}>
        <Feather name="menu" size={30} />
      </Pressable>
    </View>
  );
};

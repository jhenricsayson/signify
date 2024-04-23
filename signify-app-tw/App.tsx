import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppNavigation } from "@/navigation";
import { useTheme } from "@/hooks";

const App: React.FC = () => {
  const { isDarkTheme } = useTheme();

  const [fontsLoaded, fontError] = useFonts({
    archivoblack: require("./assets/fonts/archivo.ttf"),
    bobbyjonessoft: require("./assets/fonts/bobbyjones.otf"),
    comicsans: require("./assets/fonts/comicsans.ttf"),
    impact: require("./assets/fonts/impact.ttf"),
    sailors: require("./assets/fonts/sailors.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Failed to load font assets</Text>;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className={`flex-auto ${isDarkTheme ? "bg-primary" : "bg-primary2"}`}>
        <AppNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

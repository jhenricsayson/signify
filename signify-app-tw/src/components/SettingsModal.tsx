import React from "react";
import _ from "lodash";
import * as Brightness from "expo-brightness";
import Checkbox from "expo-checkbox";
import { Modal, View, Text, Switch, Pressable, Dimensions } from "react-native";
import { useGlobalFonts, useTheme, useTranslate } from "@/hooks";
import { FontTypes } from "@/types/store";

type Props = {
  open: boolean;
  type?: "eye-comfort" | "color-theme" | "speed" | "fonts";
  handleClose: () => void;
};

type SettingsModalProps = {
  handleClose: () => void;
};

const { height } = Dimensions.get("screen");

const FontsConfig: React.FC<SettingsModalProps> = (props) => {
  const { handleSetFont } = useGlobalFonts();
  const fontsArr = ["archivo-black", "bobby-jones-soft", "comic-sans", "impact", "sailors"];

  const handleSelectFont = async (fontName: FontTypes) => {
    handleSetFont(fontName as FontTypes);
    props.handleClose();
  };

  return (
    <View className="flex flex-col items-center w-full gap-3">
      {fontsArr.map((font) => (
        <Pressable
          className="w-[90%] border border-gray-600 rounded-lg py-3"
          key={`home-menu-${font}`}
          onPress={() => handleSelectFont(font as FontTypes)}
        >
          <Text style={{ fontFamily: font.toLowerCase().replaceAll("-", "") }} className="text-center text-gray-600 font-bold">
            {_.startCase(font)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const EyeComfortConfig: React.FC<SettingsModalProps> = (props) => {
  const { globalFont } = useGlobalFonts();
  const [enabled, setEnabled] = React.useState<boolean>(false);

  const handleToggle = () => {
    setEnabled((prevState) => !prevState);
  };

  React.useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();

      if (status === "granted") {
        if (enabled) {
          console.log("lower brightness");
          Brightness.setSystemBrightnessAsync(0.5);
        } else {
          console.log("higher brightness");
          Brightness.setSystemBrightnessAsync(1);
        }
      }
    })();
  }, [enabled]);

  return (
    <View className="flex flex-col gap-5">
      {enabled ? (
        <Text style={{ fontFamily: globalFont }} className="text-gray-800 text-center">
          Enabled
        </Text>
      ) : (
        <Text style={{ fontFamily: globalFont }} className="text-gray-800 text-center">
          Disabled
        </Text>
      )}

      <Switch
        trackColor={{ false: "#ddd", true: "#ddd" }}
        thumbColor={enabled ? "green" : "white"}
        ios_backgroundColor="#ddd"
        onValueChange={handleToggle}
        value={enabled}
      />
    </View>
  );
};

const ColorThemeConfig: React.FC<SettingsModalProps> = (props) => {
  const { globalFont } = useGlobalFonts();
  const { isDarkTheme, handleSetDark } = useTheme();
  const [enabled, setEnabled] = React.useState<boolean>(isDarkTheme);

  const handleToggle = () => {
    setEnabled((prevState) => !prevState);
    handleSetDark(enabled);
  };

  return (
    <View className="flex flex-col gap-5">
      {enabled ? (
        <Text style={{ fontFamily: globalFont }} className="text-gray-800 text-center">
          Dark
        </Text>
      ) : (
        <Text style={{ fontFamily: globalFont }} className="text-gray-800 text-center">
          Light
        </Text>
      )}

      <Switch
        trackColor={{ false: "#ddd", true: "#ddd" }}
        thumbColor={enabled ? "green" : "white"}
        ios_backgroundColor="#ddd"
        onValueChange={handleToggle}
        value={enabled}
      />
    </View>
  );
};

const SpeedThemeConfig: React.FC<SettingsModalProps> = (props) => {
  const speedsArr = [0.5, 1.0, 1.5, 2.0];
  const { globalFont } = useGlobalFonts();
  const { handleSetSpeed, speed } = useTranslate();

  const handleSelectSpeed = (selectedSpeed: number) => {
    handleSetSpeed(selectedSpeed);
  };

  return (
    <View className="flex flex-col gap-5">
      {speedsArr.map((speedVal) => (
        <View className="flex flex-row gap-2" key={`speed-${speedVal}`}>
          <Checkbox
            key={`speed-val-${speedVal}`}
            value={Boolean(speedVal === speed)}
            color={Boolean(speedVal === speed) ? "green" : undefined}
            onValueChange={() => handleSelectSpeed(+speedVal)}
          />
          <Text style={{ fontFamily: globalFont }}>{speedVal}</Text>
        </View>
      ))}
    </View>
  );
};

export const SettingsModal: React.FC<Props> = (props) => {
  const { globalFont } = useGlobalFonts();
  const { isDarkTheme } = useTheme();

  return (
    <View className="flex justify-center items-center">
      <Modal animationType="slide" transparent={true} visible={props.open} onRequestClose={props.handleClose}>
        <View className="flex justify-center items-center mt-[100px]" style={{ height: height - 200 }}>
          <View className={`${isDarkTheme ? "bg-primary" : "bg-primary3"}  rounded w-[90%] p-5 items-center shadow-lg`}>
            <Text style={{ fontFamily: globalFont }} className="text-gray-800 font-bold text-xl">
              {_.startCase(props.type)}
            </Text>
            <View className="flex-auto items-center justify-center w-full py-3">
              {props.type === "fonts" ? <FontsConfig handleClose={props.handleClose} /> : null}
              {props.type === "eye-comfort" ? <EyeComfortConfig handleClose={props.handleClose} /> : null}
              {props.type === "color-theme" ? <ColorThemeConfig handleClose={props.handleClose} /> : null}
              {props.type === "speed" ? <SpeedThemeConfig handleClose={props.handleClose} /> : null}
            </View>

            <Pressable className="rounded p-1 mt-10" onPress={props.handleClose}>
              <Text style={{ fontFamily: globalFont }} className="text-blue-900 underline text-center">
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

import React from "react";
import { Modal, View, Text, Pressable, Dimensions, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { VideoAssets } from "@/assets/video-assets";

type Props = {
  open: boolean;
  selectedChar?: string;
  handleClose: () => void;
};

const { height } = Dimensions.get("screen");

export const AlphabetLetterModal: React.FC<Props> = (props) => {
  const video = React.useRef(null);

  // @ts-ignore
  const videoSrc = VideoAssets[props.selectedChar?.toUpperCase()];

  return (
    <View className="flex justify-center items-center">
      <Modal animationType="slide" transparent={true} visible={props.open} onRequestClose={props.handleClose}>
        <View className="flex justify-center items-center mt-[100px]">
          <View className="bg-primary1 rounded w-4/4 p-10 items-center shadow-lg" style={{ height: height - 250 }}>
            {/* <Text className="text-white text-center font-bold">Handsign for: {props.selectedChar}</Text> */}
            <View className="flex-1 justify-center mt-10">
              <Video
                ref={video}
                style={{ alignSelf: "center", width: 320, height: 320 }}
                source={videoSrc}
                resizeMode={ResizeMode.CONTAIN}
                useNativeControls
                shouldPlay
                isLooping
              />
            </View>
            <Pressable className="w-2/4 bg-red-300 rounded p-3 -mt-20" onPress={props.handleClose}>
              <Text className="text-white text-center">Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

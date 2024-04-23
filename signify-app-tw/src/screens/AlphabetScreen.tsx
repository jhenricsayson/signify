import React from "react";
import { View, Text, Pressable } from "react-native";
import { useGlobalFonts, useTheme } from "@/hooks";
import { AppLayout } from "@/layouts";
import { AlphabetLetterModal } from "@/components";

type ModalParams = {
  open: boolean;
  selectedChar?: string;
};

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const AlphabetScreen: React.FC = () => {
  const { globalFont } = useGlobalFonts();
  const { isDarkTheme } = useTheme();
  const [modal, setModal] = React.useState<ModalParams>({
    open: false,
    selectedChar: undefined,
  });

  const handleShowAlphabet = (char: string) => {
    setModal({ open: true, selectedChar: char });
  };

  const handleCloseModal = () => {
    setModal({ open: false, selectedChar: undefined });
  };

  return (
    <React.Fragment>
      <AppLayout showTopnav canGoBack>
        <View className={`flex-auto pt-3 ${isDarkTheme ? "bg-primary" : "bg-primary2"}`}>
          <Text style={{ fontFamily: globalFont }} className="font-bold text-2xl text-center mt-5 mb-10">
            ALPHABET
          </Text>
          <View className="flex flex-row flex-wrap items-start justify-center gap-4">
            {chars.split("").map((char) => (
              <Pressable className="border border-gray-600 rounded p-4" key={`btn-letter-${char}`} onPress={() => handleShowAlphabet(char)}>
                <Text style={{ fontFamily: globalFont }} className="font-medium">
                  {char}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </AppLayout>
      <AlphabetLetterModal open={modal.open} selectedChar={modal.selectedChar} handleClose={handleCloseModal} />
    </React.Fragment>
  );
};

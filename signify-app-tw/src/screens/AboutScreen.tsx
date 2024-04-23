import React from "react";
import { View, Text } from "react-native";
import { useGlobalFonts } from "@/hooks";
import { AppLayout } from "@/layouts";

export const AboutScreen: React.FC = () => {
  const { globalFont } = useGlobalFonts();
  return (
    <AppLayout scrollable showTopnav canGoBack>
      <View className="flex-auto">
        <Text style={{ fontFamily: globalFont }} className="font-bold text-2xl text-center mb-5">
          ABOUT US
        </Text>
        <Text style={{ fontFamily: globalFont }} className="text-[16px] mb-10">
          Welcome to our application, created with passion and dedication by a group of Grade 12 students from the section Euclid of Sagay National
          High School. At the heart of our endeavor lies a simple yet profound goal: to bridge communication gaps between learners with special needs
          and the wider community.
        </Text>

        <Text style={{ fontFamily: globalFont }} className="text-[16px] mb-10">
          Our application is designed to empower individuals with hearing impairments by providing them with a tool to express themselves effectively
          through hand signs. By leveraging the power of technology, we aim to foster inclusivity and understanding, ensuring that no one is left
          behind in the conversation.
        </Text>

        <Text style={{ fontFamily: globalFont }} className="text-[16px] mb-10">
          With a commitment to accessibility and user-friendliness, our team has crafted an intuitive interface that facilitates seamless translation
          from speech to hand signs. Whether in educational settings, social interactions, or daily communication, our application serves as a
          reliable companion, enabling meaningful connections to flourish.
        </Text>

        <Text style={{ fontFamily: globalFont }} className="text-[16px] mb-10">
          Join us on this journey as we strive to make the world a more inclusive place, one sign at a time. Together, let's break down barriers and
          build bridges of communication, ensuring that every voice is heard and every message is understood.
        </Text>
      </View>
    </AppLayout>
  );
};

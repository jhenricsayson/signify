import { useSettingsStore } from "@/store";

export const useTranslate = () => {
  const { SET_SPEED, speed } = useSettingsStore();

  const handleSetSpeed = async (speed: number) => {
    SET_SPEED(speed);
  };

  return {
    speed,
    handleSetSpeed,
  };
};

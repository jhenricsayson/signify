import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (key: string, data: any) => {
  try {
    const toStoreData = typeof data === "object" ? JSON.stringify(data) : data;
    await AsyncStorage.setItem(key, toStoreData);
  } catch (error) {
    console.log("async-set-error", error);
  }
};

export const getStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    return data;
  } catch (error) {
    console.log("async-set-error", error);
  }
};

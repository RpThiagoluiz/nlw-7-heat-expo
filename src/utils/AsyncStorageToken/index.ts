import AsyncStorage from "@react-native-async-storage/async-storage";

const APPTOKEN = "NLW_7_HEAT_EXPO_ACCESS_TOKEN";

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(APPTOKEN);
  } catch (error: any) {
    console.log(`getTokenError`, error);
    console.log(`getTokenError message`, error.message);
    return null;
  }
};

const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(APPTOKEN, token);
  } catch (error: any) {
    console.log(`setToken`, error);
    console.log(`setToken message`, error.message);
    return null;
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(APPTOKEN);
  } catch (error: any) {
    console.log(`removeToken`, error);
    console.log(`removeToken message`, error.message);
    return null;
  }
};

export { getToken, setToken, removeToken };

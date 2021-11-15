import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../Interface";

const APPUSER = "NLW_7_HEAT_EXPO_USERDATA";

const getUser = async () => {
  try {
    return await AsyncStorage.getItem(APPUSER);
  } catch (error: any) {
    console.log(`getUserError`, error);
    console.log(`getUserError message`, error.message);
    return null;
  }
};

const setUser = async (user: User) => {
  try {
    await AsyncStorage.setItem(APPUSER, JSON.stringify(user));
  } catch (error: any) {
    console.log(`setUser`, error);
    console.log(`setUser message`, error.message);
    return null;
  }
};

const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(APPUSER);
  } catch (error: any) {
    console.log(`removeUser`, error);
    console.log(`removeUser message`, error.message);
    return null;
  }
};

export { getUser, setUser, removeUser };

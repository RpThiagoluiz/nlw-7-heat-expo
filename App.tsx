import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";

// Lembra que existe um tempo para o loading das fonts.

export default function App() {
  // Fonts Loaded, tempo de loading das fonts.
  // expo app loading fonts. Para segurar o loading das telas, ate as fonts estiverm carregadas.

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}

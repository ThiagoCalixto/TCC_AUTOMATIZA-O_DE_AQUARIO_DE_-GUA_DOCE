import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import {
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import FlashMessage from 'react-native-flash-message';

import theme from "./src/theme";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/services/auth/auth";
import { GetCurrentLocation } from "./src/services/currentLocation";
import { CurrentLocationProvider, useCurrentLocationContext } from "./src/contexts/CurrentLocation";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  
  if (fontsLoaded) {
    onLayoutRootView();
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="#0E1647" />
      <CurrentLocationProvider>
        <AuthProvider>
          <Routes />
          <FlashMessage position="top" />
        </AuthProvider>
      </CurrentLocationProvider>
    </ThemeProvider>
  );
}

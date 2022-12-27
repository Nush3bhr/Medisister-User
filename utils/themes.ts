// Some generic authentication system...
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { DefaultTheme } from "@react-navigation/native";
import { extendTheme } from "native-base";

export const nativeBaseTheme = extendTheme({
  colors: {
    primary: {
      50: "#ffe4f3",
      100: "#fdb7d6",
      200: "#f789b9",
      300: "#f25a9d",
      400: "#ed2c81",
      500: "#d31268",
      600: "#a50a51",
      700: "#77053a",
      800: "#490123",
      900: "#1e000e",
    },
    // Add new color
  },
  config: {
    // Changing initialColorMode to 'dark'
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: "Montserrat_100Thin",
        italic: "Montserrat_100Thin_Italic",
      },
      200: {
        normal: "Montserrat_200ExtraLight",
        italic: "Montserrat_200ExtraLight_Italic",
      },
      300: {
        normal: "Montserrat_300Light",
        italic: "Montserrat_300Light_Italic",
      },
      400: {
        normal: "Montserrat_400Regular",
        italic: "Montserrat_400Regular_Italic",
      },
      500: {
        normal: "Montserrat_500Medium",
        italic: "Montserrat_500Medium_Italic",
      },
      600: {
        normal: "Montserrat_600SemiBold",
        italic: "Montserrat_600SemiBold_Italic",
      },
      700: {
        normal: "Montserrat_700Bold",
        italic: "Montserrat_700Bold_Italic",
      },
      800: {
        normal: "Montserrat_800ExtraBold",
        italic: "Montserrat_800ExtraBold_Italic",
      },
      900: {
        normal: "Montserrat_900Black",
        italic: "Montserrat_900Black_Italic",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },
});

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: "rgb(255, 45, 85)",
    primary: "#DC136C",
    background: "white",
  },
};

export const useGoogleFonts = () =>
  useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

import { Layout, Redirect, RootContainer, useLink } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Some generic authentication system...
import { NativeBaseProvider } from "native-base";
import { useAuthStore } from "../context/auth";
import {
  nativeBaseTheme,
  navigationTheme,
  useGoogleFonts,
} from "../utils/themes";
import React from "react";
import QueryProvider from "../utils/ReactQuery";

export default function RootLayout() {
  // Use some global auth context to control the route access.
  const { state } = useAuthStore();
  const link = useLink();

  let [fontsLoaded] = useGoogleFonts();

  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    if (!fontsLoaded) return;
    if (state?.user?.id) {
      link.replace("/main");
    } else {
      link.replace("/sign-in");
    }
  }, [fontsLoaded, state?.user?.id]);

  if (!fontsLoaded) return null;
  return (
    <QueryProvider>
      <RootContainer theme={navigationTheme} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <Layout>
            <Layout.Screen name="sign-in" />
            <Layout.Screen name="main" />
            <Layout.Children />
          </Layout>
        </NativeBaseProvider>
      </SafeAreaView>
    </QueryProvider>
  );
}

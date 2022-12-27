import { Stack, useFocusEffect, useHref, useNavigation } from "expo-router";
import React from "react";
import ModalHeader from "../../../components/ModalHeader";

export default function Layout() {
  const navigation = useNavigation();
  const href = useHref();

  useFocusEffect(
    React.useCallback(() => {
      if (href.href === "/main/consultation") {
        navigation.setOptions({
          headerShown: true,
          tabBarStyle: {
            display: "flex",
          },
        });
        if (href.params?.fromHome === "true") {
          navigation.setParams({ fromHome: false });
          navigation.navigate("book-consultation");
        }
      } else {
        navigation.setOptions({
          headerShown: false,
          href: null,
          tabBarStyle: {
            display: "none",
          },
        });
      }
    }, [href, navigation])
  );
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="book-consultation"
        options={{
          headerShown: true,
          header: (props) => <ModalHeader {...props} />,
        }}
      />
    </Stack>
  );
}

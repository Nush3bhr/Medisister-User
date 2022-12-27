import { View } from "react-native";
import { Link, Stack, Redirect } from "expo-router";
import { useAuthStore } from "../context/auth";
import React, { useEffect } from "react";
import { Text } from "native-base";
import Welcome from "../components/screens/Welcome";

export default function Home() {
  const { state } = useAuthStore();

  const [redirect, setRedirect] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Welcome />
    </View>
  );
}

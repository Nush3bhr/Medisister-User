import { View } from "react-native";
import { Link, Stack, Redirect } from "expo-router";
import { useAuthStore } from "../context/auth";
import React, { useEffect } from "react";

export default function Home() {
  const { state } = useAuthStore();

  const [redirect, setRedirect] = React.useState(false);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

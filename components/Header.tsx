import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Heading, HStack, IconButton, VStack, Text } from "native-base";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";
import CartIcon from "./CartIcon";
import { useSettingsStore } from "../context/settings";
import { useAuthStore } from "../context/auth";
import { Link } from "expo-router";

function generateGreetings() {
  const currentTime = moment();

  if (!currentTime || !currentTime.isValid()) {
    return "Hello";
  }

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format("HH"));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return "Good afternoon";
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return "Good evening";
  }
  // Between dawn and noon
  return "Good morning";
}

const Header = () => {
  const navigation = useNavigation();
  const { state } = useSettingsStore();
  const authStore = useAuthStore();
  return state.headerShown ? (
    <SafeAreaView
      style={{
        paddingTop: 20,
        marginTop: 2,
        paddingHorizontal: 15,
        marginBottom: 20,
      }}
    >
      <HStack alignItems={"center"} justifyContent="space-between">
        <HStack space={2} alignItems={"center"}>
          <Link href="/main/profile">
            <Avatar source={{ uri: authStore.state.user.avatar }} />
          </Link>
          <VStack>
            <Text fontSize={16}>{generateGreetings()}</Text>
            <Text fontSize={24}>{authStore?.state?.user?.firstName}</Text>
          </VStack>
        </HStack>

        <HStack>
          <CartIcon />
          <IconButton
            _icon={{
              as: Feather,
              name: "bell",
              color: "muted.500",
              size: 6,
            }}
            onPress={() => navigation.navigate("Settings")}
          />
          <IconButton
            _icon={{
              as: Ionicons,
              name: "settings-outline",
              color: "muted.500",
              size: 6,
            }}
            onPress={() => navigation.navigate("Settings")}
          />
        </HStack>
      </HStack>
    </SafeAreaView>
  ) : (
    <></>
  );
};

export default Header;

const styles = StyleSheet.create({});

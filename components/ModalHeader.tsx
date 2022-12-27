import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import {
  Avatar,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  View,
} from "native-base";
import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { useAuthStore } from "../context/auth";
import CartIcon from "./CartIcon";

type Props = { hideActions: boolean } & NativeStackHeaderProps;

const ModalHeader = ({ hideActions = false, ...props }: Props) => {
  const navigation = useNavigation();
  const authStore = useAuthStore();
  return (
    <HStack
      pr={3}
      w="full"
      // bg="red.400"
      height={"16"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <HStack alignItems={"center"} space={2}>
        <IconButton
          _icon={{
            as: MaterialCommunityIcons,
            name: "close",
            color: "muted.500",
            size: 6,
          }}
          onPress={() => props.navigation.goBack()}
        />
        <Text fontSize={16} fontWeight={600}>
          {props?.options?.title}
        </Text>
      </HStack>

      {!hideActions && (
        <HStack alignItems={"center"} space={2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("/main/profile");
            }}
          >
            <Avatar size={10} source={{ uri: authStore.state.user.avatar }} />
          </TouchableOpacity>
          <CartIcon />
          {/* <Text>{props?.options?.title}</Text> */}
        </HStack>
      )}
    </HStack>
  );
};

export default ModalHeader;

// const styles = StyleSheet.create({});

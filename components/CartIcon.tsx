import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetCart } from "../api/cart";
import { Badge, IconButton, VStack } from "native-base";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLink } from "expo-router";

const CartIcon = () => {
  const { data } = useGetCart();

  const link = useLink();

  return (
    <>
      <VStack>
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-5}
          mr={-2}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}
        >
          {data?.cartItems?.length || 0}
        </Badge>
        <IconButton
          _icon={{
            as: Feather,
            name: "shopping-bag",
            color: "muted.500",
            size: 6,
          }}
          onPress={() => {
            link.push("/main/cart");
          }}
        />
      </VStack>
    </>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});

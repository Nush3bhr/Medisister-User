import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAddToCart, useGetCart } from "../api/cart";
import { Button, HStack, IconButton } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const AddToCartButton = ({ medicine }) => {
  const { data: cart } = useGetCart();
  const { mutate } = useAddToCart();

  const currentQuantity =
    cart?.cartItems?.find?.((e) => e.medicineId === medicine.id)?.quantity || 0;
  return (
    <>
      {currentQuantity === 0 ? (
        <Button
          w={130}
          onPress={() => {
            mutate({
              medicine: medicine,
              quantity: currentQuantity + 1,
              action: "add",
            });
          }}
          variant={"outline"}
        >
          Add to Cart
        </Button>
      ) : (
        <HStack
          alignItems={"center"}
          space={5}
          borderWidth={0.5}
          borderColor="primary.500"
          w={130}
          h={35}
          borderRadius={5}
        >
          <IconButton
            onPress={() => {
              mutate({
                medicine: medicine,
                quantity: currentQuantity - 1,
                action: "remove",
              });
            }}
            _icon={{
              as: MaterialCommunityIcons,
              name: currentQuantity === 1 ? "delete-outline" : "minus",
              color: "muted.500",
              size: 6,
            }}
          />
          <Text>{currentQuantity || "0"}</Text>
          <IconButton
            onPress={() => {
              mutate({
                medicine: medicine,
                quantity: currentQuantity + 1,
                action: "add",
              });
            }}
            _icon={{
              as: MaterialCommunityIcons,
              name: "plus",
              color: "muted.500",
              size: 6,
            }}
          />
        </HStack>
      )}
    </>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({});

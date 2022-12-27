import { StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  Box,
  HStack,
  Text,
  VStack,
  Button,
  FlatList,
  Image,
} from "native-base";
import { useAuthStore } from "../../../context/auth";
import Card from "../../../components/Card";
import { useGetCart } from "../../../api/cart";
import { FlashList } from "@shopify/flash-list";
import config from "../../../utils/config";
import AddToCartButton from "../../../components/AddToCartButton";
import MyImage from "../../../components/MyImage";

const Cart = () => {
  const { state } = useAuthStore();
  const { data: cart } = useGetCart();
  console.log({ cart });

  return (
    <VStack padding={2} space={3} flex={1}>
      <Card>
        <HStack justifyContent={"space-between"}>
          <VStack>
            <Text>
              Delivering to{" "}
              <Text
                fontWeight={600}
              >{`${state.user.firstName} ${state.user.lastName}`}</Text>
            </Text>
            <Text>
              {state.user.address || "# 25, opposite pabiacherra school ..."}
            </Text>
          </VStack>
          <Link href={"/main/cart/addresses"}>
            <Button variant={"link"}>Change</Button>
          </Link>
        </HStack>
      </Card>

      <Card paddingY={5}>
        <Text>Free delivery on orders above 500</Text>
      </Card>

      <FlashList
        data={[...cart.cartItems, ...cart.cartItems, ...cart.cartItems] || []}
        renderItem={({ item, index }) => {
          return <CartItem item={item} index={index} />;
        }}
        estimatedItemSize={150}
      />

      <HStack
        h={65}
        justifyContent="space-around"
        paddingTop={3}
        borderTopColor={"black"}
        borderTopWidth={0.5}
      >
        <VStack>
          <Text>Total Amount</Text>
          <Text>Rs. {cart.total}</Text>
        </VStack>

        <Button w={"55%"}>Proceed To Pay</Button>
      </HStack>
    </VStack>
  );
};

export default Cart;

const CartItem = ({ index, item }) => {
  const [failed, setFailed] = React.useState(false);
  failed && console.log({ failed });
  return (
    <Card marginY={index === 0 ? 2 : 5} padding={5} paddingX={3}>
      <HStack space={3} alignItems="center">
        <MyImage source={{ uri: config.s3Url + item?.medicine?.image }} />

        <VStack space={1}>
          <Text>{item.medicine.name}</Text>
          <Text>{item.medicine.quantityDescription}</Text>
          <Text>₹ {item.medicine.price}</Text>
          <AddToCartButton medicine={item.medicine} />
        </VStack>
      </HStack>
    </Card>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

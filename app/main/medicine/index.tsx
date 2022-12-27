import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Input,
  View,
  VStack,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useMedicines } from "../../../api/medicines";
import { useAddToCart, useGetCart } from "../../../api/cart";
import config from "../../../utils/config";
import { Tabs, useLink } from "expo-router";
import AddToCartButton from "../../../components/AddToCartButton";
import MyImage from "../../../components/MyImage";

const Medicine = () => {
  const { data } = useMedicines();
  const { mutate } = useAddToCart();
  const { data: cart } = useGetCart();
  const [searchField, setSearchField] = React.useState("");
  const link = useLink();
  const searchedData = React.useMemo(() => {
    if (searchField === "") {
      return data;
    }
    return data?.filter((item) =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [data, searchField]);

  return (
    <VStack p={3} flex={1}>
      {/* <ModalHeader /> */}

      <View w="full" bg="white" position={"absolute"} mx={3}>
        <Input
          value={searchField}
          onChangeText={setSearchField}
          placeholder="Search"
          width="100%"
          borderRadius="4"
          my="3"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
      </View>
      <FlatList
        flex={1}
        mt={85}
        data={searchedData}
        renderItem={(item) => {
          const medicine = item.item || {};

          const currentQuantity =
            cart?.cartItems?.find?.((e) => e.medicineId === medicine.id)
              ?.quantity || 0;
          return (
            <HStack
              justifyContent={"space-around"}
              alignItems="center"
              h={120}
              borderColor="blue.200"
              borderWidth={1}
              my={3}
              borderRadius={5}
              padding={3}
              paddingY={15}
            >
              <VStack flex={1} alignItems={"center"} space={5}>
                <MyImage source={{ uri: config.s3Url + medicine?.image }} />
              </VStack>
              <VStack flex={2} space={2}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  {medicine.name}
                </Text>
                {medicine.quantityDescription && (
                  <Text>{medicine.quantityDescription}</Text>
                )}
                <Text>₹ {medicine.price}</Text>
                <AddToCartButton medicine={medicine} />
              </VStack>
            </HStack>
          );
        }}
      />

      <HStack
        h={55}
        justifyContent="space-around"
        paddingTop={3}
        borderTopColor={"black"}
        borderTopWidth={0.5}
      >
        <VStack>
          <Text>Total Amount</Text>
          <Text>Rs. {cart.total}</Text>
        </VStack>

        <Button
          onPress={() => {
            link.push("/main/cart");
          }}
        >
          Proceed To Checkout
        </Button>
      </HStack>
    </VStack>
  );
};

export default Medicine;

const styles = StyleSheet.create({});

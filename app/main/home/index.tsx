import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  View,
  Text,
  VStack,
  FlatList,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import ConsultationImage from "../../../assets/home/Ellipse 8-1";
import MedicineImage from "../../../assets/home/Ellipse 8";
import { useAuthStore } from "../../../context/auth";
import config from "../../../utils/config";
import { useMedicineCategories } from "../../../api/medicineCategory";
import Header from "../../../components/Header";

const items = [
  { title: "Medicines", image: MedicineImage, route: "medicine" },
  {
    title: "Consultation",
    image: ConsultationImage,
  },
  // {
  //   title: "Lab Test",
  //   image: LabTestImage,
  // },
  // {
  //   title: "Ambulance",
  //   image: AmbulanceImage,
  // },
];
const HomeScreen = () => {
  const navigation = useNavigation();
  const authStore = useAuthStore();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(config.baseUrl + "auth/user", {});
      } catch (error) {
        console.log({ error });
        authStore.logout();
      }
    })();
  }, []);

  const { data } = useMedicineCategories();

  return (
    <>
      <ScrollView flex={1} marginX={"2.5"} bg="white">
        <Input
          placeholder="Search for medicines, doctors"
          width="100%"
          borderRadius="4"
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
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />

        <HStack
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt="5"
        >
          {items.map((item) => (
            <TouchableOpacity
              key={item.title}
              onPress={() => {
                navigation.navigate(item?.route);
              }}
            >
              <VStack w={185} h={85} alignItems={"center"}>
                <Box
                  borderRadius={10}
                  w={"100%"}
                  h={"100%"}
                  bg="#DDFC35"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <item.image />
                  <Text color="black" fontSize={12} mt={1}>
                    {item.title}
                  </Text>
                </Box>
              </VStack>
            </TouchableOpacity>
          ))}
        </HStack>

        <VStack>
          <Heading mt="5" size="lg" fontWeight="bold">
            Categories
          </Heading>
          <FlatList
            // numColumns={2}
            data={data}
            horizontal
            renderItem={(item) => {
              return (
                <Box w={200} h={100}>
                  <Box
                    w={180}
                    h={100}
                    bg="gray.100"
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Text>{item.item.name}</Text>
                  </Box>
                </Box>
              );
            }}
          />
        </VStack>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

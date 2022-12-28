import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Link,
  Redirect,
  useFocusEffect,
  useHref,
  useNavigation,
} from "expo-router";
import { Box, HStack, Icon, Input, Text, VStack } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import SexologistImage from "../../../assets/home/Ellipse 8";
import CardiologistImage from "../../../assets/home/Ellipse 8";
import SurgeonImage from "../../../assets/home/Ellipse 8";
import GynaecologistImage from "../../../assets/home/Ellipse 8";
import Card from "../../../components/Card";

const consultation = () => {
  const { params } = useHref();

  const cardItems = [
    { title: "Sexologist", image: SexologistImage },
    { title: "Cardiologist", image: CardiologistImage },
    { title: "Surgeon", image: SurgeonImage },
    { title: "Gynaecologist", image: GynaecologistImage },
  ];

  const appointmentsList = [
    {
      title: "Sexologist gdskaHFLSFUasdtewyrowrtewy HCKDHFLDJSFH",
      image: SexologistImage,
    },
    { title: "Cardiologist", image: CardiologistImage },
    { title: "Surgeon", image: SurgeonImage },
    { title: "Gynaecologist", image: GynaecologistImage },
  ];

  return (
    <View>
      <VStack marginX={"2.5"}>
        <Input
          placeholder="Search for medicines or health product"
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
              as={<AntDesign name="filter" />}
            />
          }
        />

        <HStack w={"100%"} marginY={"2.5"}>
          {cardItems.map((item, index) => (
            <Box
              key={index}
              marginRight={5}
              borderRadius={10}
              w={100}
              h={100}
              bg="#ddfc35"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <item.image />
              <Text color="black" fontSize={12} mt={1}>
                {item.title}
              </Text>
            </Box>
          ))}
        </HStack>

        <Box marginTop={5}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize="lg">My Appointments</Text>
            <AntDesign name="right" size={24} color="grey" />
          </HStack>
        </Box>

        <HStack w={"100%"} marginY={"2.5"}>
          {appointmentsList.map((item, index) => (
            <Card margin={2} key={index}>
              <VStack space={4}>
                <HStack paddingRight={8} space={2}>
                  <item.image />
                  <VStack marginLeft={2}>
                    <Text bold color="black" fontSize="md">
                      Dr. Abhijit Paul
                    </Text>
                    <Text color="grey" fontSize="xs">
                      General physician, AIIMS
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                    borderRadius={5}
                    bg="#ffffff"
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={1}
                    margin={1}
                    shadow={1}
                  >
                    10th Feb, 2022 @ 12.30
                  </Box>
                  <Box
                    borderRadius={8}
                    bg="#46d5b3"
                    alignItems={"center"}
                    margin={1}
                    justifyContent={"center"}
                    padding={1}
                  >
                    Precheck
                  </Box>
                </HStack>
              </VStack>
            </Card>
          ))}
        </HStack>

        <Link href="/main/consultation/book-consultation">Book</Link>
      </VStack>
    </View>
  );
};

export default consultation;

const styles = StyleSheet.create({});

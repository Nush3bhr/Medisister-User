import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, HStack, Icon, Text, VStack } from "native-base";
import LifeSaver from "../../../../assets/consultation/LifeSaver";
import Card from "../../../../components/Card";
import { Feather } from "@expo/vector-icons";
import { Link, useLink } from "expo-router";
const UpcomingConsultation = () => {
  const link = useLink();

  return (
    <VStack paddingX={4} flex={1}>
      <HStack justifyContent={"space-between"}>
        <VStack>
          <Text fontSize={26}>Upcoming video consultation</Text>
          <Button
            onPress={() => {
              link.push(
                "/main/consultation/upcoming-consultation/waiting-room"
              );
            }}
          >
            Enter waiting room
          </Button>
        </VStack>
        <VStack mt={8} alignItems="center" justifyContent={"center"}>
          <LifeSaver />
        </VStack>
      </HStack>

      <Card my={5} py={5}>
        <HStack space={4} alignItems="center">
          <Avatar />
          <VStack>
            <Text>Dr. John Doe</Text>
            <Text>Cardiologist</Text>
          </VStack>
        </HStack>
      </Card>

      <Text fontSize={21}>Prepare for this appointment</Text>

      <Pressable
        onPress={() => {
          link.push("/main/consultation/upcoming-consultation/checkpoint-form");
        }}
      >
        <HStack
          space={4}
          justifyContent="space-between"
          alignItems="center"
          my={5}
        >
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Icon as={<Feather name="clipboard" />} size={8} />
            <VStack>
              <Text fontSize={16}>Fill out check-point form</Text>
              <Text fontSize={12}>Help the doctor understand you better.</Text>
            </VStack>
          </HStack>
          <Icon as={<Feather name="chevron-right" />} size={6} />
        </HStack>
      </Pressable>
    </VStack>
  );
};

export default UpcomingConsultation;

const styles = StyleSheet.create({});

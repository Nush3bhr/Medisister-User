import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Button,
  HStack,
  Icon,
  Input,
  KeyboardAvoidingView,
  Text,
  VStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

const CheckpointForm = () => {
  const formMethods = useForm();

  const values = formMethods.watch();

  return (
    <KeyboardAvoidingView flex={1} behavior="height">
      <VStack flex={1} paddingX={5} justifyContent={"space-between"}>
        <VStack>
          <HStack space={4} alignItems="center">
            <Icon as={<Feather name="clipboard" />} size={8} />
            <VStack>
              <Text fontSize={16}>Fill out check-point form</Text>
              <Text fontSize={12}>Help the doctor understand you better.</Text>
            </VStack>
          </HStack>

          <VStack space={5} my={5}>
            <Input
              multiline
              minH={70}
              maxH={140}
              value={values.firstName}
              onChangeText={(text) =>
                formMethods.setValue("medicalCondition", text)
              }
              variant="outline"
              placeholder="Do you have any medical condition?"
            />
            <Input
              multiline
              minH={70}
              maxH={140}
              value={values.firstName}
              onChangeText={(text) =>
                formMethods.setValue("familyMedicalCondition", text)
              }
              variant="outline"
              placeholder="Medical condition in family?"
            />
          </VStack>

          <VStack alignItems={"center"} space={3}>
            <Icon as={<Feather name="file-plus" />} size={12} />
            <Button w="80%" variant={"outline"}>
              UPLOAD MEDICAL REPORTS
            </Button>
            <Text fontSize={10} paddingX={5}>
              you may select as many files as you want. Files of format *.PDF,
              *.JPG, *.JPEG, *.PNG
            </Text>
          </VStack>
        </VStack>

        <HStack
          justifyContent={"space-between"}
          alignItems="center"
          paddingY={5}
        >
          <Button variant={"link"}>Skip</Button>
          <Button w="30%">Save</Button>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default CheckpointForm;

const styles = StyleSheet.create({});

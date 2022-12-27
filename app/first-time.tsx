import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Heading, HStack, Input, VStack } from "native-base";
import { FormProvider, useForm } from "react-hook-form";
// import { useAuthStore, User } from "../../../stores/auth";
import { useAuthStore, User } from "../context/auth";
import axios from "axios";
import config from "../utils/config";

const littleAboutMe = async (data: User) => {
  const response = await axios.put(`${config.baseUrl}/users`, data);

  return response?.data?.user;
};

const LittleAboutMe = () => {
  const { state, login } = useAuthStore();
  const formMethods = useForm({
    defaultValues: {
      ...state.user,
      countryCode: "+91",
      phone: state.user.phone || "",
      address: {
        ...(state?.user?.address || {}),
      },
    } as User,
  });
  const values = formMethods.watch();
  return (
    <FormProvider {...formMethods}>
      <VStack
        flex={1}
        marginX={"2.5"}
        marginY={"16"}
        bg="white"
        justifyContent={"space-between"}
      >
        <VStack space={"2.5"}>
          <Heading>Little About You</Heading>
          <Text>
            This will help us to communicate with you and also to make sure your
            data is safe.
          </Text>
        </VStack>

        <VStack flex={0.75} justifyContent={"space-around"}>
          <Input
            value={values.firstName}
            onChangeText={(text) => formMethods.setValue("firstName", text)}
            variant="filled"
            placeholder="First Name"
          />
          <Input
            value={values.lastName}
            onChangeText={(text) => formMethods.setValue("lastName", text)}
            variant="filled"
            placeholder="Last Name"
          />

          <HStack w={"full"} justifyContent={"space-between"} space={5}>
            <Input
              isDisabled={!!state.user.phone}
              flex={1}
              value={values.countryCode}
              onChangeText={(text) => formMethods.setValue("countryCode", text)}
              variant="filled"
              placeholder="Country Code"
            />
            <Input
              isDisabled={!!state.user.phone}
              flex={1}
              value={values.phone}
              onChangeText={(text) => formMethods.setValue("phone", text)}
              variant="filled"
              placeholder="Phone"
            />
          </HStack>

          <Input
            value={values?.address?.line1}
            onChangeText={(text) => formMethods.setValue("address.line1", text)}
            variant="filled"
            placeholder="Address Line 1"
          />
          <Input
            value={values.address.city}
            onChangeText={(text) => formMethods.setValue("address.city", text)}
            variant="filled"
            placeholder="City"
          />

          <HStack w={"full"} justifyContent={"space-between"} space={5}>
            <Input
              flex={1}
              value={values.address.state}
              onChangeText={(text) =>
                formMethods.setValue("address.state", text)
              }
              variant="filled"
              placeholder="State"
            />
            <Input
              flex={1}
              value={values.address.pinCode}
              onChangeText={(text) =>
                formMethods.setValue("address.pinCode", text)
              }
              variant="filled"
              placeholder="Pin Code"
            />
          </HStack>
        </VStack>

        <Button
          onPress={() => {
            formMethods.handleSubmit(async (values) => {
              try {
                console.log("ll");

                const data = await littleAboutMe({
                  ...values,
                  isFirstTime: false,
                });
                console.log({ data });

                login({ ...data });
              } catch (err) {
                console.log(err);
              }
            }, console.log)();
            //   update({ option });
            //   navigation.goBack();
          }}
        >
          CONTINUE
        </Button>
      </VStack>
    </FormProvider>
  );
};

export default LittleAboutMe;

const styles = StyleSheet.create({});

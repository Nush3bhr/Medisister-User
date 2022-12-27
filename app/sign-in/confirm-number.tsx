import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  View,
  VStack,
} from "native-base";
import { Zocial } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OTPTextInput from "react-native-otp-textinput";

import axios from "axios";
import { useAuthStore } from "../../context/auth";
import { useLoginStore } from "../../context/login";
import config from "../../utils/config";

const ConfirmNumber = () => {
  const navigation = useNavigation();
  const authStore = useAuthStore();
  const { state, reset } = useLoginStore();

  const goToOptions = () => {
    navigation.navigate("more-options");
  };
  const [otp, setOtp] = React.useState("");
  return (
    <Stack
      flex={1}
      justifyContent="space-between"
      marginX={"2.5"}
      marginY={"16"}
    >
      <Stack space={4} flex={1} bg="white">
        <Heading>Confirm Your Number</Heading>
        <Text>
          Enter the code we’ve sent by {state.option} to {state.countryCode}{" "}
          {state.phone}
        </Text>
        <OTPTextInput
          // value={otp}
          handleTextChange={(code) => {
            setOtp(code);
          }}
          textInputStyle={{
            borderColor: "black",
            borderWidth: 1,
          }}
          containerStyle={{
            width: "70%",
          }}
        />
        <HStack alignItems={"center"}>
          <Text>Haven’t received the code? </Text>
          <Button variant={"link"} margin={0} padding={0} onPress={goToOptions}>
            More options
          </Button>
        </HStack>
      </Stack>

      <HStack justifyContent={"space-between"}>
        <Button variant={"link"} margin={0} padding={0} onPress={goToOptions}>
          More options
        </Button>
        <Button
          w={"30%"}
          onPress={async () => {
            try {
              const response = await axios.post(
                config.baseUrl + "users/verifyOtp",
                {
                  phone: state.phone,
                  countryCode: state.countryCode,
                  otp: otp,
                }
              );
              authStore.login(response.data.user);
            } catch (error) {
              alert("Invalid OTP");
            }
          }}
        >
          Continue
        </Button>
      </HStack>
    </Stack>
  );
};

export default ConfirmNumber;

const styles = StyleSheet.create({});

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
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useLoginStore } from "../../context/login";
import config from "../../utils/config";

const Form = () => {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "1064499874101-fdu1vgvhgikv9q4qm9narpe428djtmfc.apps.googleusercontent.com",
    webClientId:
      "1064499874101-fdu1vgvhgikv9q4qm9narpe428djtmfc.apps.googleusercontent.com",
  });

  const [request1, response1, promptAsync1] = Facebook.useAuthRequest({
    expoClientId: "636452011285530",
    webClientId: "636452011285530",
    redirectUri: "https://auth.expo.io/@abhishekv.dev/medisister",
  });

  const { state, update } = useLoginStore();

  React.useEffect(() => {
    (async () => {
      if (response?.type === "success") {
        const { authentication } = response;
        let userInfoResponse = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${authentication?.accessToken}` },
          }
        );
        alert(JSON.stringify(await userInfoResponse.json(), null, 2));
      }
    })();
  }, [response]);

  React.useEffect(() => {
    (async () => {
      if (response1?.type === "success") {
        let userInfoResponse = await fetch(
          "https://graph.facebook.com/me?fields=id,name,email,picture,birthday,gender,age_range,last_name,first_name,location",
          {
            headers: {
              Authorization: `Bearer ${response1?.authentication?.accessToken}`,
            },
          }
        );
        alert(JSON.stringify(await userInfoResponse.json(), null, 2));
      }
    })();
  }, [response1]);

  return (
    <View flex={1} marginX={"2.5"} marginY={"16"} bg="white">
      <Heading>Login or signup to MediSister</Heading>

      <Stack space={4} w={"100%"} mx="auto" mt={5}>
        <Stack space={1}>
          <Input
            value={state.countryCode}
            variant="filled"
            placeholder="Country/Region"
          />
          <Input
            value={state.phone}
            onChangeText={(text) => update({ phone: text })}
            keyboardType="numeric"
            variant="filled"
            placeholder="Phone Number"
            maxLength={10}
          />
        </Stack>
        <Text>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.
        </Text>

        <Input
          value={state.referralCode}
          onChangeText={(text) => update({ referralCode: text })}
          // keyboardType=""
          variant="filled"
          placeholder="Referral Code"
          maxLength={6}
        />
        <Button
          onPress={async () => {
            await axios.post(config.baseUrl + "users/sendOtp", {
              phone: state.phone,
              countryCode: state.countryCode,
              referralCode: state.referralCode,
            });
            navigation.navigate("confirm-number");
          }}
        >
          CONTINUE
        </Button>
      </Stack>
      <HStack w={"100%"} my={10}>
        <Divider
          my="2"
          w={"45%"}
          _light={{
            bg: "muted.800",
          }}
        />
        <Text w={"10%"} px="2%">
          OR
        </Text>
        <Divider
          my="2"
          w={"45%"}
          _light={{
            bg: "muted.800",
          }}
        />
      </HStack>

      <VStack space={5} w={"100%"}>
        <Button
          variant={"outline"}
          leftIcon={<Icon as={Zocial} name="email" size="sm" />}
        >
          CONTINUE WITH EMAIL
        </Button>
        <Button
          variant={"outline"}
          onPress={() => {
            promptAsync1();
          }}
          leftIcon={<Icon as={Zocial} name="facebook" size="sm" />}
        >
          CONTINUE WITH FACEBOOK
        </Button>
        <Button
          variant={"outline"}
          startIcon={<Icon as={Zocial} name="google" size="sm" />}
          onPress={() => {
            promptAsync();
          }}
        >
          CONTINUE WITH GOOGLE
        </Button>
      </VStack>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});

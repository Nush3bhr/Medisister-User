import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Heading,
  HStack,
  Icon,
  Radio,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const options = [
  {
    icon: <Icon size={6} as={MaterialCommunityIcons} name="message-outline" />,
    text: "SMS",
  },
  {
    icon: <Icon size={6} as={MaterialCommunityIcons} name="whatsapp" />,
    text: "WhatsApp",
  },
  {
    icon: <Icon size={6} as={MaterialCommunityIcons} name="phone-outline" />,
    text: "Phone",
  },
  {
    icon: <Icon size={6} as={MaterialCommunityIcons} name="email-outline" />,
    text: "Email",
  },
];

import { useNavigation } from "@react-navigation/native";
import { useLoginStore } from "../../context/login";
const MoreOptions = () => {
  const navigation = useNavigation();
  const { state, update } = useLoginStore();
  const [option, setOption] = useState(state.option);

  return (
    <VStack
      flex={1}
      marginX={"2.5"}
      marginY={"16"}
      bg="white"
      justifyContent={"space-between"}
    >
      <VStack>
        <Heading>More options</Heading>
        <Text>
          Choose another way to get a verification code on 09863540500
        </Text>
        <Radio.Group
          defaultValue="1"
          value={option}
          name="exampleGroup"
          accessibilityLabel="pick a choice"
          onChange={(nextValue) => setOption(nextValue)}
        >
          {options.map((opt) => (
            <HStack
              key={opt.text}
              w="100%"
              borderBottomWidth="1"
              borderColor="muted.800"
              py="5"
              pr="6"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <HStack alignItems="center">
                {opt.icon}
                <Text ml="3">{opt.text}</Text>
              </HStack>

              <Radio
                borderWidth={option === opt.text ? 0 : 1}
                accessibilityLabel="This is my checkbox"
                value={opt.text}
                rounded={"full"}
                colorScheme={"gray"}
                _icon={{
                  size: 7,
                }}
                size={8}
                icon={
                  <Icon
                    // size={100}
                    color={"gray"}
                    as={Feather}
                    name="check-circle"
                  />
                }
              />
            </HStack>
          ))}
        </Radio.Group>
      </VStack>

      <Button
        onPress={() => {
          update({ option });
          navigation.goBack();
        }}
      >
        CONTINUE
      </Button>
    </VStack>
  );
};

export default MoreOptions;

const styles = StyleSheet.create({});

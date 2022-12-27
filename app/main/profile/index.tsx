import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, HStack, Text, VStack } from "native-base";
import Card from "../../../components/Card";
import { useAuthStore } from "../../../context/auth";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const { state, logout, login } = useAuthStore();
  console.log(state.user.avatar);
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      login({ ...state.user, avatar: result.assets[0].uri });
    }
  };

  return (
    <VStack
      space={3}
      paddingX={4}
      paddingBottom={5}
      justifyContent="space-between"
      flex={1}
    >
      <Card height={100} justifyContent="center">
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <VStack>
            <Text fontSize={24}>
              {state.user.firstName} {state.user.lastName}
            </Text>
            <Text fontSize={18}>
              {state.user.countryCode} {state.user.phone}
            </Text>
          </VStack>

          <Pressable onPress={pickImage}>
            <Avatar
              width={75}
              height={75}
              source={{
                uri: image || state.user.avatar,
              }}
            />
          </Pressable>
        </HStack>
      </Card>
      <Button
        onPress={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </VStack>
  );
};

export default Profile;

const styles = StyleSheet.create({});

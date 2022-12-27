import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, VStack } from "native-base";

const WaitingRoom = () => {
  return (
    <VStack flex={1} alignItems="center">
      <Avatar size={48} />
    </VStack>
  );
};

export default WaitingRoom;

const styles = StyleSheet.create({});

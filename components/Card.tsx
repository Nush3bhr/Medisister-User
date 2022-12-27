import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, IBoxProps } from "native-base";

const Card = (props: IBoxProps) => {
  return (
    <Box
      padding={2}
      borderWidth={0.5}
      borderColor="black"
      borderRadius={5}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Card;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Link,
  Redirect,
  useFocusEffect,
  useHref,
  useNavigation,
} from "expo-router";

const consultation = () => {
  const { params } = useHref();

  return (
    <View>
      <Text>consultation</Text>
      <Link href="/main/consultation/upcoming-consultation">Book</Link>
    </View>
  );
};

export default consultation;

const styles = StyleSheet.create({});

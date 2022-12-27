import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import { useNavigation } from "expo-router";

const Schedule = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Schedule</Text>
      <Button
        onPress={() => {
          navigation.navigate("add-schedule");
        }}
      >
        Add
      </Button>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({});

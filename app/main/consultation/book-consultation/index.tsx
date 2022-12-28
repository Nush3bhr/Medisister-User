import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileImage from "../../../../assets/home/Ellipse 8";
import { Box, HStack, VStack } from "native-base";
import Card from "../../../../components/Card";

const BookConsultation = () => {
  const doctorsList = [
    {
      name: "Dr. Nisha Pathak",
      image: ProfileImage,
      availability: "Next available from tomorrow at 8:00 AM",
      qualification: "MBBS, MD, Fellowship",
      fee: "800",
      experience: "10 years",
      regNo: "Reg. No. 1554",
    },
    {
      name: "Dr. Ravi Pathak",
      image: ProfileImage,
      availability: "Next available from tomorrow at 8:00 AM",
      qualification: "MBBS, MD, Fellowship",
      fee: "800",
      experience: "10 years",
      regNo: "Reg. No. 1554",
    },
    {
      name: "Dr. Nisha Pathak",
      image: ProfileImage,
      availability: "Next available from tomorrow at 8:00 AM",
      qualification: "MBBS, MD, Fellowship",
      fee: "800",
      experience: "10 years",
      regNo: "Reg. No. 1554",
    },
    {
      name: "Dr. Nisha Pathak",
      image: ProfileImage,
      availability: "Next available from tomorrow at 8:00 AM",
      qualification: "MBBS, MD, Fellowship",
      fee: "800",
      experience: "10 years",
      regNo: "Reg. No. 1554",
    },
  ];

  return (
    <View>
      <Text>General Physicians</Text>
      <VStack></VStack>
    </View>
  );
};

export default BookConsultation;

const styles = StyleSheet.create({});

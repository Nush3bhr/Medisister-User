import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Button, IconButton, IIconProps } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useSettingsStore } from "../../context/settings";

const steps = [
  {
    title: "Welcome to MediSister",
    subtitle:
      "Get onboard and join the ride towards better health and diagnostic.",
    image: require("../../assets/onboarding/0.png"),
  },

  {
    title: "Better and Reliable",
    subtitle:
      "System designed and developed keeping only one thing in mind - your health!",
    image: require("../../assets/onboarding/1.png"),
  },

  {
    title: "Fast and Secure",
    subtitle:
      "we make sure that you receive medical attention at the earliest without having to feel insecure about anything.",
    image: require("../../assets/onboarding/2.png"),
  },
];

const iconStyle: IIconProps = {
  size: 50,
  borderRadius: 50,
  position: "absolute",
  right: 30,
  bottom: 270,
  backgroundColor: "#DC136C",
  color: "white",
  margin: 5.5,
};

const Welcome = () => {
  const [isOnBoardingCompleted, setIsOnBoardingCompleted] = useState(false);
  const settings = useSettingsStore();
  return (
    <>
      {!isOnBoardingCompleted ? (
        <Onboarding
          bottomBarColor="#FFEAF3"
          onSkip={() => {
            setIsOnBoardingCompleted(true);
          }}
          onDone={() => {
            setIsOnBoardingCompleted(true);
          }}
          DoneButtonComponent={(props) => (
            <IconButton
              size={"xl"}
              _icon={{
                as: MaterialIcons,
                ...iconStyle,
                name: "check",
              }}
              // size={20}
              {...props}
            />
          )}
          NextButtonComponent={(props) => (
            <IconButton
              size={"xl"}
              _icon={{
                as: MaterialIcons,
                ...iconStyle,
                name: "chevron-right",
              }}
              // size={20}
              {...props}
            />
          )}
          pages={steps.map((step, index) => ({
            ...step,
            backgroundColor: "#FFEAF3",
            image: (
              <Image style={{ height: 400, width: 400 }} source={step.image} />
            ),
          }))}
        />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFEAF3",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginHorizontal: 30,
              flex: 1,
            }}
          >
            <View style={{ marginTop: 80 }}>
              <Image source={require("../../assets/onboarding/3.png")} />
              <Text>ready for the ride?</Text>
              <Text style={{ fontSize: 30 }}>
                Ready to take the ride towards a better and healthier tomorrow
                for you and your loved ones?
              </Text>
            </View>
            <Button
              position={"absolute"}
              bottom={100}
              width={"100%"}
              onPress={() => {
                settings.setOnBoarded(true);
              }}
            >
              GET STARTED
            </Button>
          </View>
        </View>
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

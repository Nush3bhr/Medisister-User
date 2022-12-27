import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, IImageProps, Image } from "native-base";

const MyImage = (props: IImageProps) => {
  const [failed, setFailed] = React.useState(false);
  return failed ? (
    <Box style={styles.boxStyle}>
      <Text style={{ color: "#aaa", transform: [{ rotate: "-35deg" }] }}>
        No Image
      </Text>
    </Box>
  ) : (
    <Image
      onError={(e) => {
        setFailed(true);
      }}
      style={styles.boxStyle}
      {...props}
    />
  );
};

export default MyImage;

const styles = StyleSheet.create({
  boxStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

export const CustomButton = (props) => {
  const { colors } = useTheme();
  const { text, handleOnPress, width, height, type } = props;

  let buttonColor;

  const buttonContainerStyle = () => {
    if (type && type === "primary") {
      buttonColor = colors.primary;
    } else if (type && type === "secondary") {
      buttonColor = "#5655c6";
    } else if (type && type === "disabled") {
      buttonColor = "#bababa";
    }
    return {
      height: height ? height : 40,
      width: width ? width : 160,
      backgroundColor: buttonColor,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    };
  };
  return (
    <TouchableOpacity
      style={buttonContainerStyle()}
      onPress={handleOnPress ? handleOnPress : null}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: "#fff",
  },
});

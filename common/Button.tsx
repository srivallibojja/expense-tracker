import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

const CustomButton = (props: {
  text: string;
  handleOnPress: any;
  width?: string | number;
  height?: string | number;
  type?: string;
  additionalStyles?: any;
}) => {
  const { colors } = useTheme();
  const { text, handleOnPress, width, height, type, additionalStyles } = props;

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
      ...additionalStyles,
    };
  };

  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 16,
      lineHeight: 20,
      color: additionalStyles.color,
    },
  });
  return (
    <TouchableOpacity
      style={buttonContainerStyle()}
      onPress={handleOnPress ? handleOnPress : null}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

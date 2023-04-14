import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

export const CustomToast = (props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.toastView}>
        <View style={{marginHorizontal: 5}}>
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={24}
            color={colors.primary}
          />
        </View>
        <View>
          <Text style={styles.toastText}>{props.toastText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  toastView: {
    flexDirection: "row",
    bottom: 60,
    // position: "absolute",
    marginHorizontal: 20,
    width: 335,
    height: 60,
    backgroundColor: "#E6EAFE",
    borderRadius: 31,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  toastText: {
    fontSize: 12,
    lineHeight: 18,
    padding: 5,
    fontFamily: "open-sans",
    textAlign: "left",
  },
});

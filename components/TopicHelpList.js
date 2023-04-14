import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

export const TopicHelpList = (props) => {
  const { colors } = useTheme();
  const { indexValue, name, checkedValues, onChange } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginBottom: -10,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CheckBox
          checkedColor={colors.primary}
          checked={checkedValues}
          onPress={() => onChange(indexValue)}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            color: "#000000",
            textAlign: "left",
            fontFamily: "open-sans",
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

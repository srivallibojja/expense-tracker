import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const Year = (props) => {
  const { maxYear, addYear, label } = props;

  const [yearOfGrad, setYearOfGrad] = useState(() => {
    let tempArr = [];
    let currentYear = new Date().getFullYear() + addYear;
    let startDate = currentYear.toString();
    for (var i = maxYear; i >= 0; i--) {
      tempArr.push({
        label: startDate,
        value: startDate,
      });
      startDate--;
      startDate = startDate.toString();
    }
    return tempArr;
  });
  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{
          label: label !== null && label !== undefined ? label.toString() : "",
        }}
        onValueChange={(value) => props.onSelectyear(value)}
        items={yearOfGrad}
        style={{
          placeholder: { color: "#000000", opacity: 0.6 },
          inputIOS: { color: "#000000", fontSize: 16 },
          inputAndroid: { color: "#000000", fontSize: 16 },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useEffect } from "react";
import {
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

const Input = (props: {
  onChange: any;
  nativeId: string;
  addOnStyles?: any;
  placeHolder?: string;
}) => {
  const { onChange, placeHolder, nativeId, addOnStyles } = props;
  const [value, setValue] = React.useState("");

  useEffect(() => {
    onChange(nativeId, value);
  }, [value]);

  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#D0D0D0",
          borderWidth: 1,
          borderRadius: 8,
          ...addOnStyles,
        }}
      >
        <TextInput
          nativeID={nativeId}
          style={{
            display: "flex",
            width: "100%",
            paddingVertical: 5,
            paddingHorizontal: 10,
            color: "#000000",
          }}
          onChangeText={(text) => {
            setValue(text);
          }}
          placeholder={placeHolder}
          value={value}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;

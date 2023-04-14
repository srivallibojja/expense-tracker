import React from "react";
import {
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

const Select = (props: { list: any[]; onPress: any; nativeId?: string }) => {
  const { list, onPress, nativeId } = props;
  const [listVisibility, setListVisibility] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value !== "") onPress(value);
  }, [value]);

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => setListVisibility(!listVisibility)}
      >
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#979797",
            borderWidth: 1,
          }}
        >
          <TextInput
            nativeID={nativeId}
            style={{
              display: "flex",
              width: "95%",
              marginRight: "auto",
              padding: 5,
              color: "#000000",
            }}
            placeholder="Select..."
            editable={false}
            value={value}
          />
          <Image
            style={{ margin: 5 }}
            source={require("../assets/caret-down.png")}
          />
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          borderColor: "#979797",
          borderWidth: 1,
          position: "absolute",
          top: 45,
          display: `${listVisibility ? "flex" : "none"}`,
          width: "100%",
          zIndex: 10,
          backgroundColor: "#ffffff",
          padding: 10,
        }}
      >
        {list.map((item: string) => (
          <TouchableWithoutFeedback
            key={item}
            onPress={() => {
              setValue(item);
              setListVisibility(false);
            }}
          >
            <Text style={{ color: "black", marginVertical: 5 }}>{item}</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default Select;

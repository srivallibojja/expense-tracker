import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { StatusBar } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";

export const InternalScreenHeader = (props) => {
  const [networkConnected, setNetworkConnected] = useState(null);

  useFocusEffect(() => {
    NetInfo.fetch().then((state) => {
      // alert('state.type: ' + state.type +
      //   ' & isConnected: ' + state.isConnected +
      //   ' & isConnectionExpensive: ' +
      //   state.details.isConnectionExpensive);
      setNetworkConnected(state.isConnected);
    });
  }, []);
  const {
    iconName,
    title,
    buttonName,
    buttonState,
    handleData,
    screenName,
  } = props;

  const navigation = useNavigation();

  const { colors } = useTheme();

  const containerStyle = () => {
    return {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      height: Platform.select({ android: 80, default: 80 }),
      backgroundColor: colors.primary,
    };
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={containerStyle()}>
          <StatusBar backgroundColor={colors.primary} />
          <View style={styles.buttonHeader}>
            <View style={styles.buttonViewStyle}>
              <EvilIcons
                name="close"
                name={iconName}
                size={27}
                color="#fff"
                onPress={() =>
                  screenName === "BookOtherUserSlot"
                    ? props.handleState()
                    : navigation.goBack()
                }
              />
            </View>
            <View style={styles.buttonViewStyle}>
              <Text style={styles.textStyle}>{title}</Text>
            </View>
            <View style={styles.buttonViewStyle}>
              <TouchableOpacity
                onPress={() => handleData()} //handlePost()
                disabled={!buttonState}
              >
                <Text
                  style={[
                    styles.buttonTextStyle,
                    { opacity: buttonState ? 1 : 0.6 },
                  ]}
                >
                  {buttonName}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {networkConnected === false ? (
        <View
          style={{
            height: 30,
            backgroundColor: "#0f0f0f",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>You are offline</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#F5F5F5",
  },
  buttonHeader: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "open-sans-semibold",
    textAlign: "left",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "open-sans-semibold",
    textAlign: "left",
  },
  buttonViewStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";

export const CustomHeader = (props) => {
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
    screenTitle,
    headerTitle,
    headerSubTitle,
    lockIcon,
    height,
  } = props.data;
  const { colors } = useTheme();

  const containerStyle = () => {
    return {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      height: height,
      backgroundColor: colors.primary,
    };
  };
  return (
    <View>
      <View style={containerStyle()}>
        <StatusBar translucent={true} backgroundColor={colors.primary} />
        <View
          style={{
            // marginLeft: 0,
            marginRight: 20,
            marginBottom: 20,
            flexDirection: "row",
            // marginTop: 20,
            // alignItems: 'center'
          }}
        >
          {screenTitle ? (
            <View style={{ marginLeft: 20 }}></View>
          ) : (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                width: 40,
                height: 30,
              }}
              onPress={props.handleBackButton}
            >
              <Ionicons name="ios-arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
          )}
          <View>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 28,
                color: "#ffffff",
                fontFamily: "open-sans-semibold",
                marginLeft: 35,
              }}
            >
              {headerTitle}
            </Text>
            {headerSubTitle ? (
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 18,
                  color: "#fff",
                  marginTop: 5,
                  fontFamily: "open-sans-semibold",
                }}
              >
                {headerSubTitle}
              </Text>
            ) : null}
          </View>
          {/* {lockIcon ? (
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons name={lockIcon} size={24} color="#FFFFFF" />
          </View>
        ) : null} */}
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
  images: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
  },
  headerButton: {
    marginHorizontal: 5,
  },
});

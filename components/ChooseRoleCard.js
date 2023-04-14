import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useTheme} from "@react-navigation/native";
export const ChooseRoleCard = (props) => {

    const [cardClicked, setCardClicked] = useState()

    const {colors} = useTheme();
    const {
        clickedImage,
        image,
        title,
        textBody,
        onSelectRole,
    } = props;



    const cardStyle = () => {
        if (cardClicked === true) {
            return {
                marginVertical: 22,
                backgroundColor: colors.primary,
                borderWidth: 1,
                borderColor: colors.primary,
                height: 168,
                width: 335,
                borderRadius: 6,
                paddingHorizontal: 24,
                paddingVertical: 20,
                flexDirection: "row",
                alignItems: 'center'
            };
        }
        else {
            return {
                marginVertical: 22,
                backgroundColor: "#F9F7FF",
                borderWidth: 1,
                borderColor: colors.primary,
                height: 168,
                width: 335,
                borderRadius: 6,
                paddingHorizontal: 24,
                paddingVertical: 20,
                flexDirection: "row",
                alignItems: 'center'
            };
        }
    };
    const titleStyle = () => {
        if (cardClicked === true) {
            return {
                // white text
                fontSize: 20,
                lineHeight: 27,
                color: "#fff",
                fontWeight: "500",
            }
        }
        else {
            return {
                // black text
                fontSize: 20,
                lineHeight: 27,
                color: "#000",
                fontWeight: "500",
            }
        }
    }
    const roleCardInfo = () => {
        if (cardClicked === true) {
            return {
                lineHeight: 20,
                color: "#fff",
                opacity: 0.6,
                fontSize: 14,
                marginRight: 13,
            }
        }
        else {
            return {
                lineHeight: 20,
                color: "#000000",
                opacity: 0.6,
                fontSize: 14,
                marginRight: 13,
            }
        }
    }
    return (
        <View>
            <TouchableOpacity
                style={cardStyle()}
                onPress={() => {
                    setCardClicked(true);
                    onSelectRole();
                }}
            >
                <View style={styles.roleCardLeft}>
                    <View>
                        <Text style={titleStyle()}>{title}</Text>
                    </View>
                    <View style={{marginTop: 8}}>
                        <Text style={roleCardInfo()}>
                            {textBody}
                        </Text>
                    </View>
                </View>
                <View style={styles.roleCardRight}>
                    {cardClicked
                        ?
                        <Image
                            source={clickedImage}
                            style={styles.image}
                        />
                        :
                        <Image
                            source={image}
                            style={styles.image}
                        />}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    roleCardLeft: {
        flex: 1,
    },
    roleCardRight: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 78,
        height: 96
    },
})
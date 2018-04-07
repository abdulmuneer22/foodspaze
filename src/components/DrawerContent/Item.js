import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const Item = ({ index, name, icon }) => (
  <View
    style={{
      borderColor: "white",
      borderBottomWidth: index === 3 ? 1 : 0,
      borderTopWidth: 1,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center"
    }}
  >
    <Icon name={`ios-${icon}-outline`} color="white" size={25} />
    <Text
      style={{
        marginLeft: 10,
        color: "white",
        fontSize: 20
      }}
    >
      {name}
    </Text>
  </View>
);
export default Item;

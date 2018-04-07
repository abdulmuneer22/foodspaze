import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../../Constants";

const BookTable = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: "65%",
      height: 40,
      backgroundColor: Colors.PURE_ORANGE,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20
    }}
  >
    <Text
      style={{
        color: "white",
        fontSize: 20,
        fontWeight: "600"
      }}
    >
      Book Table
    </Text>
  </TouchableOpacity>
);

export default BookTable;

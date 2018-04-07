import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../Constants";

const Tag = ({ label, active, onChange }) => (
  <TouchableOpacity
    onPress={() => onChange(label)}
    style={{
      backgroundColor: active ? Colors.PURE_ORANGE : "white",
      paddingHorizontal: 10,
      height: 30,
      marginRight: 5,
      minWidth: 80,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      borderColor: Colors.PURE_ORANGE,
      borderWidth: 1
    }}
  >
    <Text
      style={{
        color: active ? "white" : Colors.PURE_ORANGE
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default Tag;

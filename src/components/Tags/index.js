import React, { Component } from "react";
import { Text, View } from "react-native";
import Tag from "./Tag";

const Tags = ({ cusine, onChange }) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: 10,
      marginHorizontal: 10
    }}
  >
    <Tag
      label="VEG"
      active={cusine === "VEG" ? true : false}
      onChange={onChange}
    />
    <Tag
      label="Non-VEG"
      active={cusine === "Non-VEG" ? true : false}
      onChange={onChange}
    />

    <Tag
      label="All"
      active={cusine === "All" ? true : false}
      onChange={onChange}
    />
  </View>
);

export default Tags;

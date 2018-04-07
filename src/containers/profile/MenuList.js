import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Metrics } from "../../Constants";
import _ from "lodash";

const Row = ({ dish_name }) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: 2,
      width: Metrics.WIDTH * 0.9,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30
    }}
  >
    <Image
      source={require("../../../assets/images/food.png")}
      style={{
        width: 40,
        height: 40
      }}
    />

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        height: 40
      }}
    >
      <Text
        style={{
          fontSize: 20,
          paddingTop: 15,
          marginLeft: 15
        }}
      >
        {_.capitalize(dish_name)}
      </Text>
    </View>
  </View>
);

const MenuList = ({ list }) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    data={list}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <Row {...item} />}
  />
);

export default MenuList;

import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import SingleCard from "./SingleCard";
import _ from "lodash";
var geodist = require("geodist");

const sortList = (location, list) => {
  var _wD = [];

  list.forEach(element => {
    var cD = geodist(
      {
        lat: location.coords.latitude,
        lon: location.coords.longitude
      },
      {
        lat: element.location.latitude,
        lon: element.location.longitude
      }
    );

    var _cI = element;
    _cI.distance = cD;

    _wD.push(_cI);
  });

  return _.orderBy(_wD, ["distance"], ["asc"]);
};

const RestaurentList = ({ RestaurantList, UserLocation, navigation }) => {
  var sorted = sortList(UserLocation, RestaurantList);
  return (
    <FlatList
      data={sorted}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <SingleCard {...item} navigation={navigation} />
      )}
    />
  );
};

export default RestaurentList;

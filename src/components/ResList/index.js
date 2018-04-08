import React, { Component } from "react";
import { Text, View, FlatList, ToastAndroid } from "react-native";
import SingleCard from "./SingleCard";
import _ from "lodash";
var geodist = require("geodist");

const sortList = (location, list) => {
  var _wD = [];

  if (
    location &&
    location.coords &&
    location.coords.latitude &&
    location.coords.longitude
  ) {
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
  } else {
    ToastAndroid.show("Unable to find your location", ToastAndroid.SHORT);
  }

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

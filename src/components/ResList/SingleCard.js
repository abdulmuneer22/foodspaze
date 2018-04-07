import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Metrics } from "../../Constants";
import Theme from "../../styles";
import Icon from "react-native-vector-icons/Ionicons";

const IconRow = ({ label, icon }) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: 2,
      alignItems: "center",
      marginTop: 10
    }}
  >
    <Icon name={`ios-${icon}-outline`} color="white" size={20} />
    <Text
      style={[
        Theme.sc_cont,
        {
          fontSize: 12,
          marginLeft: 5
        }
      ]}
    >
      {label}
    </Text>
  </View>
);

const SingleCard = ({
  name,
  image_url,
  contact,
  distance,
  navigation,
  menu_list
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("Profile", {
        name,
        image_url,
        contact,
        distance,
        menu_list,
        navigation
      })
    }
  >
    {console.log()}
    <ImageBackground
      style={Theme.sc_wrapper}
      source={{ uri: image_url }}
      defaultSource={require("../../../assets/images/default_res.jpg")}
    >
      <View style={Theme.sc_cont_wrapper}>
        <Text style={Theme.sc_cont}>{name}</Text>
        <IconRow label={contact} icon="call" />
        <IconRow label={`${distance / 1000} KM`} icon="pin" />
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default SingleCard;

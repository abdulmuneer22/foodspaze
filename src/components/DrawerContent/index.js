import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Item from "./Item";

import LG from "react-native-linear-gradient";

const routes = [
  {
    name: "Home",
    index: 0,
    icon: "home"
  },
  {
    name: "Notifications",
    index: 1,
    icon: "notifications"
  },
  {
    name: "Settings",
    index: 2,
    icon: "settings"
  },
  {
    name: "Signout",
    index: 3,
    icon: "log-out"
  }
];

export class DrawerItems extends Component {
  render() {
    return (
      <LG
        colors={["#7b69fc", "#82b5f5"]}
        style={{
          flex: 1
          // backgroundColor: "#7b69fc"
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30
          }}
        >
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius: 140 / 2
            }}
            source={require("../../../assets/images/random.png")}
          />

          <Text
            style={{
              paddingVertical: 20,
              color: "white",
              fontSize: 20
            }}
          >
            Sheila Carter
          </Text>
        </View>
        {routes.map((r, ind) => <Item key={ind} {...r} />)}
      </LG>
    );
  }
}

export default DrawerItems;

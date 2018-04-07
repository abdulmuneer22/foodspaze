import React from "react";
import { View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Home from "../containers/home";
import Profile from "../containers/profile";
import DrawerContent from "../components/DrawerContent";
import Header from "../components/Header";

const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    }
  },
  {
    contentComponent: props => <DrawerContent {...props} />
  },
  {
    initialRouteName: "Home"
  }
);

export default DrawerNavigation;

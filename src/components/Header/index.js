import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Theme from "../../styles";
import { Fonts } from "../../Constants";

const Menu = ({ navigate, state, pop }) => (
  <TouchableOpacity
    onPress={() =>
      state.routeName === "Home" ? navigate("DrawerToggle") : navigate("Home")
    }
  >
    <Icon
      name={
        state.routeName === "Home"
          ? "ios-menu-outline"
          : "ios-arrow-round-back-outline"
      }
      size={20}
      color="white"
    />
  </TouchableOpacity>
);
const Search = () => (
  <View>
    <Icon name="ios-search-outline" size={20} color="white" />
  </View>
);

const Title = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center"
    }}
  >
    <Text
      style={{
        color: "white",
        fontSize: 20,
        fontFamily: Fonts.LABEL
      }}
    >
      Food spaze
    </Text>
  </View>
);

const Header = ({ navigation }) => (
  <View style={Theme.header_wrapper}>
    <Menu {...navigation} />
    <Title />
    <Search />
  </View>
);

export default Header;

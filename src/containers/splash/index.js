import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import Theme from "../../styles";
import { connect } from "react-redux";
import { updateUserLocation } from "../../redux/actions";
import Permissions from "react-native-permissions";

export class SplashScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props;

    if (Platform.OS !== "ios") {
      Permissions.check("location").then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        console.log("Location permi", response);
        if (response === "authorized") {
          navigator.geolocation.getCurrentPosition(
            pos => {
              console.log("Position", pos);
              this.props.updateLocation(pos);
              setTimeout(() => {
                navigation.navigate("DrawerNavigation");
              }, 2000);
            },
            err => {
              console.log("Position err", err);
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
          );
        }
      });
    } else {
      this.getUserLocation();
    }
  }

  render() {
    return (
      <View style={Theme.sp_container}>
        <Text
          style={[
            Theme.sp_title,
            {
              fontSize: 48
            }
          ]}
        >
          FoodSpaze
        </Text>

        <Text
          style={[
            Theme.sp_title,
            {
              fontSize: 12
            }
          ]}
        >
          the food app
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateLocation: loc => {
      dispatch(updateUserLocation(loc));
    }
  };
};

export default connect(null, mapDispatchToProps)(SplashScreen);

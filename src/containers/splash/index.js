import React, { Component } from "react";
import { Text, View } from "react-native";
import Theme from "../../styles";
import { connect } from "react-redux";
import { updateUserLocation } from "../../redux/actions";

export class SplashScreen extends Component {
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.updateLocation(position);
      },
      error => {
        alert(JSON.stringify(error));
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  };

  componentDidMount() {
    const { navigation } = this.props;

    this.getUserLocation();

    setTimeout(() => {
      navigation.navigate("DrawerNavigation");
    }, 2000);
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

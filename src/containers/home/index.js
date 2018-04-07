import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { connect } from "react-redux";

import Header from "../../components/Header";
import List from "../../components/ResList";
import Tags from "../../components/Tags";

import { getResList } from "../../redux/actions";

export class Home extends Component {
  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }

  render() {
    const { RestaurantList } = this.props;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header navigation={this.props.navigation} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {RestaurantList && RestaurantList.length > 0 ? (
            <List {...this.props} UserLocation={this.props.UserLocation} />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    RestaurantList: state.restaurantList,
    UserLocation: state.userLocation
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAll: () => {
      dispatch(getResList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

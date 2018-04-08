import React, { Component } from "react";
import { Text, View, ActivityIndicator, Modal } from "react-native";

import { connect } from "react-redux";

import Header from "../../components/Header";
import List from "../../components/ResList";
import Tags from "../../components/Tags";

import { getResList } from "../../redux/actions";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: "",
      showModal: false
    };
  }

  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.UserLocation) {
        this.setState({
          userLocation: nextProps.UserLocation
        });
      }
    }
  }

  render() {
    const { RestaurantList } = this.props;
    const { userLocation } = this.state;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header
          navigation={this.props.navigation}
          onSearchTap={() => this.setState({ showModal: true })}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {RestaurantList && RestaurantList.length > 0 ? (
            <List {...this.props} UserLocation={userLocation} />
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

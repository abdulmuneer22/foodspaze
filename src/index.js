import React, { Component } from "react";
import { Text, View } from "react-native";
import Navigation from './navigation'
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Navigation />
      </Provider>
    );
  }
}

export default App;
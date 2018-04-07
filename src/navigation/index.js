console.disableYellowBox = true;


import { StackNavigator } from "react-navigation";

import SplashScreen from "../containers/splash";
import DrawerNavigation from "./DrawerNavigation";

const Navigation = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    DrawerNavigation: DrawerNavigation
  },

  {
    headerMode: "none"
  }
);

export default Navigation;

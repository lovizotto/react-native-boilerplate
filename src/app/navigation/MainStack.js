import * as React from "react";

import HelpScreen from "../screens/HelpScreen/HelpScreen";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="Help" component={HelpScreen} />
  </MainStack.Navigator>
);

export default MainNavigation;

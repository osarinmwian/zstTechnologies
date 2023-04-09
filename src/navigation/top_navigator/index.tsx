import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "@app/screen/home";
import SettingScreen from "@app/screen/settings";

const TopNav = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <TopNav.Navigator>
      <TopNav.Screen name="Home" component={HomeScreen} />
      <TopNav.Screen name="Settings" component={SettingScreen} />
    </TopNav.Navigator>
  );
};

export default TopNavigation;

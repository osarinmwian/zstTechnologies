import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@app/screen/home";
import SettingScreen from "@app/screen/settings";

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen name="Home" component={HomeScreen} />
      <BottomNav.Screen name="Settings" component={SettingScreen} />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;

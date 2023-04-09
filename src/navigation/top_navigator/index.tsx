import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "@app/screen/home";
import SettingScreen from "@app/screen/settings";
import MyTaskScreen from "@app/screen/my_task";
import ZstTaskItems from "@app/screen/zst_task_items";

const TopNav = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <TopNav.Navigator>
      <TopNav.Screen name="MyTask" component={MyTaskScreen} />
      <TopNav.Screen name="zstTaskItems" component={ZstTaskItems} />
    </TopNav.Navigator>
  );
};

export default TopNavigation;

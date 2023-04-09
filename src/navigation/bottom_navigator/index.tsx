import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@app/screen/home";
import SettingScreen from "@app/screen/settings";
import NewListScreen from "@app/screen/new_list";

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          // tabBarIcon: ({ focused }) => (
          //   <IconAntDesign
          //     name="home"
          //     size={WP(5.9)}
          //     color={focused ? COLORS.blue : COLORS.gray}
          //   />
          // ),
        }}
      />
      <BottomNav.Screen name="Settings" component={SettingScreen} />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;

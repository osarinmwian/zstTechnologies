import React, { useState } from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "@app/screen/home";
import SettingScreen from "@app/screen/settings";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

import { COLORS } from "@assets/themes";
import CircleButton from "@app/screen/circle_buttton";
import AddModal from "@app/screen/add_modal";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteParmaList } from "../parma_list";

const BottomNav = createBottomTabNavigator();

interface Props {
  onPress: () => void;
}
const CustomTabBarButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: WP(16.2),
        height: WP(16.2),
        borderRadius: WP(8.1),
        backgroundColor: COLORS.red,
        marginBottom: WP(-1.875),
        elevation: WP(1.875),

        top: WP(-8.1),
      }}
    >
      <Feather name="plus" size={24} color={COLORS.white} />
    </View>
  </TouchableOpacity>
);

const BottomNavigation = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log("MODAL");
  };
  return (
    <>
      <BottomNav.Navigator>
        <BottomNav.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather name="menu" size={24} color="black" />
            ),
          }}
        />
        <BottomNav.Screen
          name="CircleButton"
          component={CircleButton}
          options={{
            tabBarButton: ({ onPress }) => (
              <CustomTabBarButton onPress={toggleModal} />
            ),
          }}
        />
        <BottomNav.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather name="more-horizontal" size={24} color="black" />
            ),
          }}
        />
      </BottomNav.Navigator>
      <AddModal
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(!isModalVisible)}
      />
    </>
  );
};

export default BottomNavigation;

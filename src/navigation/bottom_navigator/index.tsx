import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@app/screen/home";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

import { COLORS } from "@assets/themes";
import CircleButton from "@app/screen/circle_buttton";
import AddModal from "@app/screen/add_modal";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ZstTaskItemsScreen from "@app/screen/zst_task_items";
import MoreModal from "@app/screen/more_modal";

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
        backgroundColor: COLORS.lightBlack,
        marginBottom: WP(-1.875),
        elevation: WP(1.875),
        top: WP(-8.1),
      }}
    >
      <Feather name="plus" size={24} color={COLORS.yellow} />
    </View>
  </TouchableOpacity>
);

const BottomNavigation = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <BottomNav.Navigator
        screenOptions={{
          tabBarStyle: { position: "absolute", backgroundColor: "#292323" },
          tabBarShowLabel: false,
        }}
      >
        <BottomNav.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather name="menu" size={24} color={COLORS.gray} />
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
          name="More"
          component={ZstTaskItemsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="more-horizontal"
                size={24}
                color={COLORS.gray}
                onPress={toggleVisible}
              />
            ),
          }}
        />
      </BottomNav.Navigator>
      <AddModal
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(!isModalVisible)}
      />
      <MoreModal
        isVisible={visible}
        closeModal={() => setVisible(!isModalVisible)}
      />
    </>
  );
};

export default BottomNavigation;

// const Tab = createMaterialBottomTabNavigator();

// const BottomNavigation = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   return (
//     <>
//       <Tab.Navigator
//         initialRouteName="Feed"
//         activeColor="#e91e63"
//         barStyle={{ backgroundColor: COLORS.lightBlack }}
//       >
//         <Tab.Screen
//           name="Menu"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//             tabBarIcon: ({ color }) => (
//               <Feather name="menu" size={24} color="black" />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Notifications"
//           component={CircleButton}
//           options={{
//             tabBarLabel: "",
//             tabBarIcon: ({ color }) => (
//               <CustomTabBarButton onPress={toggleModal} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="ActionsModal"
//           component={ActionsModal}
//           options={{
//             tabBarLabel: "More",
//             tabBarIcon: ({ color }) => (
//               <Feather name="more-horizontal" size={24} color="black" />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//       <AddModal
//         isVisible={isModalVisible}
//         closeModal={() => setModalVisible(!isModalVisible)}
//       />
//     </>
//   );
// };

// export default BottomNavigation;

import HomeScreen from "@app/screen/home";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "../bottom_navigator";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={BottomNavigation} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

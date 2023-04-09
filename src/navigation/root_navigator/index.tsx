import HomeScreen from "@app/screen/home";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

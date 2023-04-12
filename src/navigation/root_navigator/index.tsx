import HomeScreen from "@app/screen/home";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "../bottom_navigator";
import NewListScreen from "@app/screen/new_list";
import ZstTaskItemsScreen from "@app/screen/zst_task_items";
import ActionsModal from "@app/screen/bottom_sheet";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
        />
        <RootStack.Screen name="newListScreen" component={NewListScreen} />
        <RootStack.Screen name="zstTaskItems" component={ZstTaskItemsScreen} />
        <RootStack.Screen name="zstTaskItems" component={ActionsModal} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

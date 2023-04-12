import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RouteParmaList = {
  HomeScreen:
    | {
        items?: string;
      }
    | undefined;
  CardScreen: undefined;
  MyTaskScreen: undefined;
  WelcomeScreen: undefined;
  CircleButton: undefined;
  AddModal: undefined;
  ActionsModal: undefined;
  NewListScreen:
    | {
        items?: string;
      }
    | undefined;
  ZstTaskItemsScreen:
    | {
        items?: string;
      }
    | undefined;
};

export type RoutesStackParmaList<T extends keyof RouteParmaList> = {
  navigation: NavigationProp<RouteParmaList, T>;
  route: RouteProp<RouteParmaList, T>;
};

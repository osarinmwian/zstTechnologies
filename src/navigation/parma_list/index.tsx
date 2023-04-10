import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RouteParmaList = {
  HomeScreen:
    | {
        item?: string;
      }
    | undefined;
  CardScreen: undefined;
  MyTaskScreen: undefined;
  WelcomeScreen: undefined;
  NewListScreen: undefined;
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

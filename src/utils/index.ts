import { RouteParmaList } from "@app/navigation/parma_list";


export enum NavType {
    REPLACE = 'replace',
    RESET = 'reset',
    PUSH = 'push',

  }
export const navigateRouter = (
    navigation: any,
    screen: string,
    _navType?: NavType,
    data? :any,
  ) => {
    if (_navType === NavType.REPLACE) {
        navigation.replace(
          screen as keyof RouteParmaList,
        );
      } else if (_navType === NavType.PUSH) {
        navigation.push(
          screen as keyof RouteParmaList
        );
      } else if (_navType === NavType.RESET) {
        navigation.reset({
          index: 0,
          routes: [{ name: screen as keyof RouteParmaList }],
        });
      } else {
        navigation.navigate(
          screen as keyof RouteParmaList,
        );
      }
    }
  
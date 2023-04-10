import { RouteParmaList } from '@app/navigation/parma_list';
import { navigateRouter } from '@app/utils';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useCustomNavigation = () => {
    const navigation = useNavigation<StackNavigationProp<RouteParmaList>>();
  
    const navToZstItemsScreen = () => {
        navigateRouter(navigation, 'zstTaskItems');
      };
  
    return {
      navToZstItemsScreen // Wrap the function inside an object
    };
  }

  
import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: WP(3),
    marginTop: WP(1.875),
    marginBottom: WP(1.875),
    borderColor: COLORS.lightGray,
    borderWidth: WP(0.2),
    borderRadius: WP(2),
    paddingHorizontal: WP(3),
    paddingVertical: WP(3),
  },
  completeTodos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: WP(3),
    marginTop: WP(25),
    marginBottom: WP(1.875),
    borderColor: COLORS.lightGray,
    borderWidth: WP(0.2),
    borderRadius: WP(2),
    paddingHorizontal: WP(3),
    paddingVertical: WP(3),
    
  },
  completeTodosText: {
    color: COLORS.white,
    alignSelf: "center",
    marginTop: WP(10),
    marginBottom: WP(2), 
  },
  niceWorkStyle: {
    color: COLORS.gray,
    alignSelf: "center",
  
  }
});

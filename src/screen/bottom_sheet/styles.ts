import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  contentContainer: {
    flex: 1,
    borderTopRightRadius: WP(6),
    paddingHorizontal: WP(2),  
  },
  pressable: {
    flexDirection: 'row',
    marginHorizontal: WP(5),
    marginVertical: WP(2.5),
  },
  image: {
    marginTop: WP(2),
  },
  textStyle: {
    color: COLORS.black,
    fontSize: SIZE.h8,
    fontWeight: '400',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: WP(0.5),
    marginHorizontal: WP(2),
    marginTop: WP(1.5),
  },
  icon: {
    color: COLORS.gray,
    marginTop: WP(1.5),
  },
  activityTextStyle: {
    color: COLORS.black,
    fontSize: SIZE.h8,
    fontWeight: '400',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: WP(2),
    marginVertical: WP(4),
  },
  pressableActivity: {
    marginHorizontal: WP(5),
    flexDirection: 'row',
    marginBottom: WP(2),
  },
});

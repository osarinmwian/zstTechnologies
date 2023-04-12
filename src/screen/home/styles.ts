import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: WP(10),
        backgroundColor: COLORS.black
    },
 text: {
    fontSize: SIZE.h10,
    fontWeight: "bold",
    color: COLORS.white,
  
 },
 taskView: {
    alignSelf: "center",
    marginHorizontal: WP(2.7),
    
    
 },
 count: {
    fontSize: SIZE.h8,
    fontWeight: "bold", 
    color: COLORS.white,
    alignSelf: "center",
    marginTop: WP(2),
   
 },
 countView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: WP(2.7),
    marginTop: WP(-4),
    
 },
});

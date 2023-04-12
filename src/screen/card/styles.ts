import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
     backgroundColor: "white",
    alignContent: "center",
    margin: WP(27),
     height: WP(50),
     width: WP(50)
      
    },
    title: {
        alignSelf: "center",
        marginTop: WP(10),
        color: COLORS.gray
    },
    icon: {
        color: COLORS.green,
        marginHorizontal: WP(15)  
    }
  });

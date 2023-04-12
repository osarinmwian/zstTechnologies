import { Todo } from "@app/interface";
import { AppDispatch, RootState } from "@app/redux/store";
import { deleteTodo } from "@app/redux/store/taskSlice";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { styles } from "./styles";
import { COLORS } from "@assets/themes";

const ZstTaskItemsScreen = () => {
  const todos = useSelector((state: RootState) => state.tasks.items);

  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        numColumns={1}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.content}>
              <AntDesign
                name="staro"
                size={WP(5.6)}
                color={COLORS.white}
                style={styles.icon}
              />

              <Text style={styles.text}>
                {item.heading[0].toUpperCase() + item.heading.slice(1)}
              </Text>
            </View>
            <Entypo name="circle" size={WP(5.4)} color={COLORS.white} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ZstTaskItemsScreen;

import { Todo } from "@app/interface";
import { AppDispatch, RootState } from "@app/redux/store";
import { deleteTodo } from "@app/redux/store/taskSlice";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
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
                size={22}
                color="black"
                style={styles.icon}
              />
              <Text>
                {item.heading[0].toUpperCase() + item.heading.slice(1)}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ZstTaskItemsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: WP(3),
    marginTop: WP(1.875),
    marginBottom: WP(1.875),
    borderColor: "gray",
    borderWidth: WP(0.2),
    borderRadius: WP(2),
    paddingHorizontal: WP(1),
    paddingVertical: WP(3),
  },
  content: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: WP(5),
    marginLeft: WP(2),
  },
});

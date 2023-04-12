// import { RootState } from "@app/redux/store";
// import { AntDesign, Entypo } from "@expo/vector-icons";
// import { FlatList, SafeAreaView, Text, View } from "react-native";
// import { useSelector } from "react-redux";
// import { widthPercentageToDP as WP } from "react-native-responsive-screen";
// import { styles } from "./styles";
// import { COLORS } from "@assets/themes";

// const ZstTaskItemsScreen = () => {
//   const todos = useSelector((state: RootState) => state.tasks.items);

//   return (
//     <SafeAreaView>
//       <FlatList
//         data={todos}
//         numColumns={1}
//         scrollEnabled={true}
//         renderItem={({ item }) => (
//           <View style={styles.container}>
//             <View style={styles.content}>
//               <AntDesign
//                 name="staro"
//                 size={WP(5.6)}
//                 color={COLORS.white}
//                 style={styles.icon}
//               />

//               <Text style={styles.text}>
//                 {item.heading[0].toUpperCase() + item.heading.slice(1)}
//               </Text>
//             </View>
//             <Entypo name="circle" size={WP(5.4)} color={COLORS.white} />
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// export default ZstTaskItemsScreen;

import { ActivityIndicator, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteTodo } from "@app/redux/store/taskSlice";
import { COLORS } from "@assets/themes";
import CardScreen from "../card";
import { styles } from "./styles";

const ZstTaskItemsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);

  const handleDeleteAll = () => {
    todos.forEach((todo) => {
      dispatch(deleteTodo(todo.id));
    });
  };
  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (todos.length > 0 && todos.length < 2) {
    return (
      <View style={{ marginVertical: "50%" }}>
        {isLoading && (
          <View>
            <ActivityIndicator color={"red"} style={{ marginBottom: 10 }} />
            <Text style={{ color: "white", alignSelf: "center" }}>
              Task in progress
            </Text>
          </View>
        )}
      </View>
    );
  } else if (todos.length == 2) {
    return (
      <View>
        <CardScreen icon="check" />
        <View style={styles.completeTodos}>
          <Text style={styles.completeTodosText}>Task completed</Text>
          <Pressable onPress={handleDeleteAll}>
            <Text style={styles.completeTodosText}>Undo</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return null;
  }
};
export default ZstTaskItemsScreen;

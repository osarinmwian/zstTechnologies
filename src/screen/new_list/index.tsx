// import { View, Text, TouchableOpacity, FlatList } from "react-native";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@app/redux/store";
// import { Todo } from "@app/interface";
// import Input from "@app/component/text_input";

// const NewListScreen = () => {
//   const [editableTodoId, setEditableTodoId] = useState(null);
//   const todos = useSelector((state: RootState) => state.tasks.items);

//   return (
//     <View>
//       <View>
//         <Input placeholder="Edit Todos" />
//       </View>
//     </View>
//   );
// };

// export default NewListScreen;

// import { View, Text, TouchableOpacity, FlatList } from "react-native";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@app/redux/store";
// import Input from "@app/component/text_input";
// import { updateTodo } from "@app/redux/store/taskSlice";

// const NewListScreen = () => {
//   const [editableTodoId, setEditableTodoId] = useState("");
//   const todos = useSelector((state: RootState) => state.tasks.items);
//   const dispatch = useDispatch();

//   const handleUpdateTodo = (id: string, heading: string) => {
//     dispatch(updateTodo({ id, heading }));
//     setEditableTodoId("");
//   };

//   return (
//     <View>
//       <Text>View Task Details</Text>
//       <FlatList
//         data={todos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View>
//             {editableTodoId === item.id || editableTodoId === "" ? (
//               <>
//                 <View>
//                   <Input
//                     placeholder="Edit Todos"
//                     onChangeText={(event) => handleUpdateTodo(item.id, event)}
//                   />
//                   <TouchableOpacity>
//                     <Text>EDIT</Text>
//                   </TouchableOpacity>
//                 </View>
//                 <Text>
//                   {item.heading &&
//                     item.heading[0].toUpperCase() + item.heading.slice(1)}
//                 </Text>
//               </>
//             ) : (
//               <View>
//                 <Text>{item.heading}</Text>
//                 <TouchableOpacity onPress={() => setEditableTodoId(item.id)}>
//                   <Text>Edit</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default NewListScreen;

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

const NewListScreen = () => {
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
              <MaterialIcons
                name="delete"
                size={22}
                color="black"
                style={styles.icon}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default NewListScreen;

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

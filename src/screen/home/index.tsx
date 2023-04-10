// import {
//   View,
//   Text,
//   SafeAreaView,
//   Alert,
//   Keyboard,
//   TouchableOpacity,
//   FlatList,
//   Pressable,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import HomeTopTab from "@app/component/home_tab";
// import CardScreen from "../card";
// import { useNavigation } from "@react-navigation/native";
// import firebase from "../../../config/index";
// import Input from "@app/component/text_input";
// import { useCustomNavigation } from "@app/hooks";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { RouteParmaList } from "@app/navigation/parma_list";

// type Todo = {
//   id: string;
//   heading: string;
// };
// const HomeScreen = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const todoRef = firebase.firestore().collection("todos");
//   const [addData, setAddData] = useState("");
//   const { navToZstItemsScreen } = useCustomNavigation();
//   const navigation = useNavigation<StackNavigationProp<RouteParmaList>>();
//   useEffect(() => {
//     todoRef.orderBy("createdAt", "desc").onSnapshot((querySnapShot) => {
//       const todos:
//         | ((prevState: Todo[]) => Todo[])
//         | { id: string; heading: any }[] = [];
//       querySnapShot.forEach((doc) => {
//         const data = doc.data();
//         todos.push({
//           id: doc.id,
//           heading: data.heading,
//         });
//       });
//       setTodos(todos); // add this line to update the todos state
//     });
//   }, []);
//   // delete Todos
//   const deleteTodo = (todos: { id: string | undefined }) => {
//     todoRef
//       .doc(todos.id)
//       .delete()
//       .then(() => {
//         Alert.alert("Delete Successful");
//         navToZstItemsScreen();
//       })
//       .catch((error) => {
//         Alert.alert(error);
//       });
//   };

//   // addTodos
//   const addTodos = () => {
//     if (addData && addData.length > 0) {
//       const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         heading: addData,
//         createdAt: timestamp,
//       };
//       todoRef
//         .add(data)
//         .then(() => {
//           setAddData("");
//           Keyboard.dismiss();
//         })
//         .catch((error) => {
//           Alert.alert(error);
//         });
//     }
//   };
//   return (
//     <SafeAreaView>
//       <View>
//         <View
//           style={{
//             alignSelf: "center",
//             marginHorizontal: 10,
//           }}
//         >
//           <Text> Task</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "flex-end",
//             marginHorizontal: 10,
//           }}
//         >
//           <Text> 0</Text>
//         </View>
//         <HomeTopTab />
//         {/* <CardScreen /> */}
//         <Input
//           placeholder="Add New Todos"
//           onChangeText={(heading) => setAddData(heading)}
//           value={addData}
//         />
//         <TouchableOpacity onPress={addTodos}>
//           <Text>ADD</Text>
//         </TouchableOpacity>
//         <FlatList
//           data={todos}
//           numColumns={1}
//           renderItem={({ item }) => (
//             <View style={{ backgroundColor: "red" }}>
//               <Pressable
//                 onPress={() =>
//                   // navigation.navigate("ZstTaskItemsScreen", {
//                   //   items: item.heading,
//                   // })
//                   navigation.navigate("ZstTaskItemsScreen", {
//                     items: "some data here",
//                   })
//                 }
//               >
//                 <Text onPress={() => deleteTodo(item)}>DELETE</Text>
//                 <View>
//                   <Text>
//                     {item.heading[0].toUpperCase() + item.heading.slice(1)}
//                   </Text>
//                 </View>
//               </Pressable>
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

import {
  View,
  Text,
  SafeAreaView,
  Alert,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeTopTab from "@app/component/home_tab";
import CardScreen from "../card";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../../config/index";
import Input from "@app/component/text_input";
import { useCustomNavigation } from "@app/hooks";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteParmaList } from "@app/navigation/parma_list";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@app/redux/store";
import { addTodo, deleteTodo, fetchTodos } from "@app/redux/store/taskSlice";

type Todo = {
  id: string;
  heading: string;
};

const HomeScreen = () => {
  const [addData, setAddData] = useState("");
  const { navToZstItemsScreen } = useCustomNavigation();
  const navigation = useNavigation<StackNavigationProp<RouteParmaList>>();
  const dispatch = useDispatch<AppDispatch>();
  // const todos = useSelector((state: RootState) => state.todos.items);
  const todos = useSelector((state: RootState) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  // delete Todos
  const handleDelete = (todo: Todo) => {
    dispatch(deleteTodo(todo.id));
  };
  // addTodos
  const handleAdd = () => {
    if (addData && addData.length > 0) {
      const data = {
        heading: addData,
      };
      dispatch(addTodo(data.heading)); // pass the heading property to addTodo
      setAddData("");
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            alignSelf: "center",
            marginHorizontal: 10,
          }}
        >
          <Text> Task</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginHorizontal: 10,
          }}
        >
          <Text>{todos.length}</Text>
        </View>
        <HomeTopTab />
        {/* <CardScreen /> */}
        <Input
          placeholder="Add New Todos"
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Text>ADD</Text>
        </TouchableOpacity>
        <FlatList
          data={todos}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "red" }}>
              <Pressable
                onPress={() =>
                  // navigation.navigate("ZstTaskItemsScreen", {
                  //   items: item.heading,
                  // })
                  navigation.navigate("ZstTaskItemsScreen", {
                    items: "some data here",
                  })
                }
              >
                <Text onPress={() => handleDelete(item)}>DELETE</Text>
                <View>
                  <Text>
                    {item.heading[0].toUpperCase() + item.heading.slice(1)}
                  </Text>
                </View>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

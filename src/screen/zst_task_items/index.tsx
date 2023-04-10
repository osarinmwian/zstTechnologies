// import {
//   Alert,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import firebase from "../../../config/index";
// import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
// import Input from "@app/component/text_input";

// const ZstTaskItemsScreen = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>UPDATE SCREEN</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ZstTaskItemsScreen;

// const styles = StyleSheet.create({});

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

const ZstTaskItemsScreen = () => {
  const [addData, setAddData] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  // delete Todos
  const handleDelete = (todo: Todo) => {
    dispatch(deleteTodo(todo.id));
  };

  const handleAdd = () => {
    if (addData && addData.length > 0) {
      dispatch(addTodo(addData));
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
            <View>
              <Pressable onPress={() => handleDelete(item)}>
                <Text>DELETE</Text>
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

export default ZstTaskItemsScreen;

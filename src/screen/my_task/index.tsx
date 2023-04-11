import { Pressable, Text, View } from "react-native";
import React from "react";
import { AppDispatch, RootState } from "@app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteTodo } from "@app/redux/store/taskSlice";

const MyTaskScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);
  const handleDeleteAll = () => {
    todos.forEach((todo) => {
      dispatch(deleteTodo(todo.id));
    });
  };
  return (
    <View>
      {todos && todos.length === 10 ? (
        <View>
          <Text>task completed </Text>
          <Pressable onPress={handleDeleteAll}>
            <MaterialIcons name="delete" size={24} color="black" />
          </Pressable>
        </View>
      ) : (
        <Text>no task yet </Text>
      )}
    </View>
  );
};

export default MyTaskScreen;

import { ActivityIndicator, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteTodo } from "@app/redux/store/taskSlice";
import { COLORS } from "@assets/themes";
import CardScreen from "../card";
import { styles } from "./styles";

const MyTaskScreen = () => {
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
  } else if (todos.length === 0) {
    return (
      <View>
        <CardScreen icon="check" />
        <Text style={styles.completeTodosText}>No completed</Text>
      </View>
    );
  } else if (todos.length == 2) {
    return (
      <View>
        <CardScreen />
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
export default MyTaskScreen;

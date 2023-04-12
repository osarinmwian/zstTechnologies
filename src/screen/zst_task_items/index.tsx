import { ActivityIndicator, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "@app/redux/store/taskSlice";
import CardScreen from "../card";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";

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
        <CardScreen icon="check" size={WP(27)} />
        <Text style={styles.completeTodosText}>All tasks completed</Text>
        <Text style={styles.niceWorkStyle}>Nice work!</Text>
        <View style={styles.completeTodos}>
          <Text style={styles.taskCompleted}> Task completed</Text>
          <Pressable onPress={handleDeleteAll}>
            <Text style={styles.undoText}>Undo</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return null;
  }
};
export default ZstTaskItemsScreen;

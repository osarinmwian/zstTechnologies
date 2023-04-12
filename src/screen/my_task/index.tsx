import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RootState } from "@app/redux/store";
import { useSelector } from "react-redux";
import CardScreen from "../card";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";

const MyTaskScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const todos = useSelector((state: RootState) => state.tasks.items);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (todos.length > 0 && todos.length < 10) {
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
        <CardScreen icon="feather" size={WP(20)} />
        <Text style={styles.completeTodosText}>No Task Yet</Text>
        <Text style={styles.noTaskYetStyle}>
          Add Your to-dos and keep track of them
        </Text>
        <Text style={styles.noTaskYetStyle}>across google workspace</Text>
      </View>
    );
  } else {
    return null;
  }
};
export default MyTaskScreen;

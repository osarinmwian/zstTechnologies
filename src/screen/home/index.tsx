import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HomeTopTab from "@app/component/home_tab";
import { useSelector } from "react-redux";
import { RootState } from "@app/redux/store";

const HomeScreen = () => {
  const todos = useSelector((state: RootState) => state.tasks.items);
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

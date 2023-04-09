import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HomeTopTab from "@app/component/home_tab";
import CardScreen from "../card";

const HomeScreen = () => {
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
          <Text> 0</Text>
        </View>
        <HomeTopTab />
        <CardScreen />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

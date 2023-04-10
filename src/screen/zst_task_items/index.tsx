import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import firebase from "../../../config/index";
import { RouteProp } from "@react-navigation/native";
import Input from "@app/component/text_input";

type ZstTaskItemsProps = {
  route: RouteProp<Record<string, object | undefined>, string>; // <-- define type of route prop
};
const ZstTaskItemsScreen = ({ route }: ZstTaskItemsProps) => {
  const todoRef = firebase.firestore().collection("todos");
  const [textHeading, onChangeHeadingText] = useState(
    // route.params?.item?.name || ""
    ""
  );

  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc()
        .update({
          heading: textHeading,
        })
        .then(() => {
          Alert.alert("Updated");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  };
  return (
    <View>
      <Input
        placeholder="update Todos"
        onChangeText={(heading) => onChangeHeadingText(heading)}
        value={textHeading}
      />
      <TouchableOpacity onPress={() => updateTodo()}>
        <Text>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ZstTaskItemsScreen;

const styles = StyleSheet.create({});

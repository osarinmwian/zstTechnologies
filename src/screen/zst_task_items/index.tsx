import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import firebase from "../../../config/index";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Input from "@app/component/text_input";

type ZstTaskItemsScreenParams = {
  items: string;
  id: string;
};
type ZstTaskItemsScreenRouteProp = RouteProp<
  Record<string, ZstTaskItemsScreenParams>,
  "ZstTaskItemsScreen"
>;
const ZstTaskItemsScreen = () => {
  const route = useRoute<ZstTaskItemsScreenRouteProp>();
  const { items } = route.params ?? {};
  const todoRef = firebase.firestore().collection("todos");
  const [textHeading, onChangeHeadingText] = useState(
    route.params?.items || ""
  );

  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(route.params.items)
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
    <SafeAreaView>
      <View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Input
            placeholder="update Todos"
            onChangeText={(heading) => onChangeHeadingText(heading)}
            value={textHeading}
          />
        </View>
        <TouchableOpacity onPress={() => updateTodo()}>
          <Text>UPDATE</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: "blue" }}>
          <Text>TODO ITEM</Text>
          <Text>{items}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ZstTaskItemsScreen;

const styles = StyleSheet.create({});

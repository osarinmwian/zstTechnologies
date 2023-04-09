import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@assets/themes";
import TaskScreen from "../my_task";
import ZstTaskItems from "../zst_task_items";

const HomeScreen = () => {
  const [layout, setLayout] = useState<"MyTask" | "zstTaskItems">(
    "zstTaskItems"
  );
  return (
    <>
      <View style={styles.con}>
        <View style={styles.container}>
          <TouchableOpacity>
            {layout === "MyTask" ? (
              <Text allowFontScaling={false} style={styles.active}>
                My Task
              </Text>
            ) : (
              <Text
                allowFontScaling={false}
                onPress={() => setLayout("MyTask")}
                style={styles.text}
              >
                My Task
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              allowFontScaling={false}
              style={layout === "zstTaskItems" ? styles.active : styles.text}
              onPress={() => setLayout("zstTaskItems")}
            >
              shoppingList
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {layout === "MyTask" ? (
          <TaskScreen />
        ) : layout === "zstTaskItems" ? (
          <ZstTaskItems />
        ) : null}
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  con: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%",
  },
  text: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "SofiaPro",
  },
  active: {
    fontSize: 16,
    color: COLORS.background,
    borderBottomWidth: 2,
    borderColor: COLORS.black,
    paddingBottom: 10,
    fontFamily: "SofiaPro",
  },
});

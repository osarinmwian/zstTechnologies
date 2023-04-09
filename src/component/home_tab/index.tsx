import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@assets/themes";
import MyTaskScreen from "@app/screen/my_task";
import ZstTaskItems from "@app/screen/zst_task_items";
import NewListScreen from "@app/screen/new_list";

const HomeTopTab = () => {
  const [layout, setLayout] = useState<"MyTask" | "zstTaskItems" | "new List">(
    "zstTaskItems"
  );
  return (
    <>
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
            ZstTaskItems
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            allowFontScaling={false}
            style={layout === "new List" ? styles.active : styles.text}
            onPress={() => setLayout("new List")}
          >
            New List
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {layout === "MyTask" ? (
          <MyTaskScreen />
        ) : layout === "zstTaskItems" ? (
          <ZstTaskItems />
        ) : layout === "new List" ? (
          <NewListScreen />
        ) : null}
      </View>
    </>
  );
};

export default HomeTopTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    height: 40, // Set the height of the container view
  },
  text: {
    fontSize: 14,
    color: COLORS.black,
  },
  active: {
    fontSize: 16,
    color: COLORS.primary,
    borderBottomWidth: 2,
    borderColor: COLORS.red,
    paddingBottom: 10,
    borderStyle: "solid",
  },
});

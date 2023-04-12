import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@assets/themes";
import MyTaskScreen from "@app/screen/my_task";
import ZstTaskItems from "@app/screen/zst_task_items";
import NewListScreen from "@app/screen/new_list";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const HomeTopTab = () => {
  const [layout, setLayout] = useState<"MyTask" | "zstTaskItems" | "new List">(
    "zstTaskItems"
  );
  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="staro"
          size={WP(4)}
          color={COLORS.gray}
          style={styles.icon}
        />
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
        <TouchableOpacity style={styles.touchable}>
          <AntDesign
            name="plus"
            size={WP(3)}
            color={COLORS.gray}
            style={styles.icon}
          />
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

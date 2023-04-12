import CustomModal from "@app/component/modal";
import Input from "@app/component/text_input";
import { AppDispatch, RootState } from "@app/redux/store";
import { addTodo } from "@app/redux/store/taskSlice";
import { COLORS, SIZE } from "@assets/themes";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
  Pressable,
} from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type Props = {
  isVisible: boolean;
  closeModal?: () => void;
};

const MoreModal = (props: Props) => {
  const [addData, setAddData] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);
  const handleAdd = () => {
    if (todos && todos.length >= 10) {
      Alert.alert("Limit reached", "You cannot add more than 10 todos");
      return;
    }

    if (addData && addData.length > 0) {
      dispatch(addTodo(addData));
      setAddData("");
      Keyboard.dismiss();
    }
  };
  return (
    <CustomModal isVisible={props.isVisible} onBackdropPress={props.closeModal}>
      <View style={styles.modal}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.pressable}>
            <Ionicons name="settings" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Settings</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(1),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <Ionicons name="calendar" size={WP(5)} style={styles.icon} />
            <Text style={styles.textStyle}>Calender</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <MaterialIcons name="dashboard" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Dashboard</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <MaterialIcons
              name="privacy-tip"
              size={WP(6)}
              style={styles.icon}
            />
            <Text style={styles.textStyle}>Privacy and Policy</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <Ionicons name="log-out" size={WP(7)} style={styles.icon} />
            <Text style={styles.textStyle}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </CustomModal>
  );
};

export default MoreModal;

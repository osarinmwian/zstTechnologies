/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useRef } from "react";
import { View, Text, Pressable, Image } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@assets/themes";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import CustomBackdrop from "./back_drop";

const ActionsModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useFocusEffect(
    React.useCallback(() => {
      bottomSheetModalRef.current?.present();
      //   if () {
      //     bottomSheetModalRef.current?.present();
      //   } else {
      //     bottomSheetModalRef.current?.dismiss();
      //   }
      return () => {};
    }, [])
  );

  const snapPoints = useMemo(() => ["20%", "47%"], []);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        enableDismissOnClose={true}
        containerStyle={styles.container}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={CustomBackdrop}
      >
        <View style={styles.contentContainer}>
          <Pressable style={styles.pressable}>
            <Ionicons name="settings" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Account Settings</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(1),
              marginLeft: WP(10),
            }}
          />
          <Pressable>
            <Text style={styles.textStyle}>Clean Requests</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable>
            <Ionicons name="exit-outline" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Logout</Text>
          </Pressable>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ActionsModal;

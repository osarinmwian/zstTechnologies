import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
} from "react-native";
import { Card } from "react-native-paper";

const CardScreen = () => {
  const [pan1, setPan1] = useState(new Animated.ValueXY());
  const [panResponder1, setPanResponder1] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan1.x, dy: pan1.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan1, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  const [pan2, setPan2] = useState(new Animated.ValueXY());
  const [panResponder2, setPanResponder2] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan2.x, dy: pan2.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan2, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  const [pan3, setPan3] = useState(new Animated.ValueXY());
  const [panResponder3, setPanResponder3] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan3.x, dy: pan3.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan3, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  return (
    <View style={styles.cardContainer}>
      <Animated.View
        {...panResponder1.panHandlers}
        style={[
          styles.card,
          { elevation: 3, top: 250, backgroundColor: "rgba(0,0,0,0.6)" },
          pan1.getLayout(),
        ]}
      >
        <Text style={styles.paragraph}>Card View 1</Text>
      </Animated.View>
      <Animated.View
        {...panResponder2.panHandlers}
        style={[
          styles.card,
          { elevation: 2, top: 100, backgroundColor: "rgba(0,0,0,0.4)" },
          pan2.getLayout(),
        ]}
      >
        <Text style={styles.paragraph}>Card View 2</Text>
      </Animated.View>
      <Animated.View
        {...panResponder3.panHandlers}
        style={[
          styles.card,
          { elevation: 1, backgroundColor: "rgba(0,0,0,0.2)" },
          pan3.getLayout(),
        ]}
      >
        <Text style={styles.paragraph}>Card View 3</Text>
      </Animated.View>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  card: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
  },
});

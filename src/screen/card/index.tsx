import { AppDispatch, RootState } from "@app/redux/store";
import { fetchTodos } from "@app/redux/store/taskSlice";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  FlatList,
  PanResponderInstance,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const CardScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);

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

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View style={styles.cardContainer}>
      {todos.map((todo, index) => (
        <Animated.View
          key={todo.id}
          {...(index === 0
            ? panResponder1.panHandlers
            : index === 1
            ? panResponder2.panHandlers
            : panResponder3.panHandlers)}
          style={[
            styles.card,
            {
              elevation: index + 1,
              top: 100 * index,
              backgroundColor: `rgba(0, 0, 0, ${0.2 + index * 0.2})`,
              zIndex: index === 0 ? pan1.y : index === 1 ? pan2.y : pan3.y,
            },
            (index === 0 ? pan1 : index === 1 ? pan2 : pan3).getLayout(),
          ]}
        >
          <Text style={styles.paragraph}>Card View {index + 1}</Text>
          <Text>{todo.heading}</Text>
        </Animated.View>
      ))}
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
    height: 100,
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

import React, { useCallback, useMemo, useState } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const [globalState, setGlobalState] = useState([]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  const onPress = useCallback(() => {
    setGlobalState({
      ...globalState,
    });
  }, []);

  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  return <AnimatedTouchable onPress={onPress} style={containerStyle} />;
};

export default CustomBackdrop;

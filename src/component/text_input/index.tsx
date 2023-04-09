import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputEndEditingEventData,
  ViewStyle,
  TextInput,
} from "react-native";

import React, { ChangeEvent } from "react";
import { styles } from "./styles";
import { COLORS } from "@assets/themes";

interface Props {
  onEndEditing?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: ((e: string | ChangeEvent<any>) => void) | undefined;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor?: string;
  editable?: boolean;
  inputStyle?: ViewStyle;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
}
const Input: React.FC<Props> = ({
  placeholder,
  secureTextEntry,
  value,
  onBlur,
  onFocus,
  onChangeText,
  placeholderTextColor,
  inputStyle,
  autoCapitalize,
  onChange,
  onEndEditing,
}) => {
  return (
    <TextInput
      value={value}
      style={[styles.input, inputStyle]}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || COLORS.gray}
      onChangeText={onChangeText}
      onChange={onChange}
      onEndEditing={onEndEditing}
    />
  );
};
export default Input;

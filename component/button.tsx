import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';
import useTheme from '../hooks/useTheme';

type Props = {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
};

const Button = ({children, onPress}: Props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...style.button, backgroundColor: theme.primary}}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;

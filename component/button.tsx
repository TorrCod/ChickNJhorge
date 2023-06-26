import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';

type Props = {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
};

const Button = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...style.button}}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;

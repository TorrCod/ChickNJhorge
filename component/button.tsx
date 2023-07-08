import {GestureResponderEvent, TouchableOpacity, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';
import useTheme from '../hooks/useTheme';
import {TouchableProps} from 'react-native-svg';

type Props = {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

const Button = ({children, onPress}: Props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...style, ...style.button, backgroundColor: theme.primary}}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;

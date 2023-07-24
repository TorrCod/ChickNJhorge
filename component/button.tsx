import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';
import useTheme from '../hooks/useTheme';
import {TouchableProps} from 'react-native-svg';

type Props = {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  type?: 'primary' | 'secondary' | 'shade' | 'danger';
  width?: number;
};

const Button = ({children, onPress, type, width}: Props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...style,
        ...style.button,
        backgroundColor:
          type === 'secondary'
            ? undefined
            : type === 'shade'
            ? 'white'
            : type === 'danger'
            ? 'red'
            : theme.primary,
        paddingHorizontal: 20,
        borderColor: type === 'secondary' ? theme.primary : undefined,
        borderWidth: type === 'secondary' ? 1 : undefined,
        width: width,
        ...(type === 'secondary'
          ? {}
          : {
              shadowColor: '#000',
              shadowOffset: {height: 2, width: 4},
              shadowOpacity: 1,
              shadowRadius: 4,
              elevation: 1,
            }),
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

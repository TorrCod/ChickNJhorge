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
  type?: 'primary' | 'secondary' | 'shade';
  width?: number;
};

const Button = ({children, onPress, type, width}: Props) => {
  const theme = useTheme();
  const localStyles = StyleSheet.create({
    button: {
      textShadowColor:
        type === 'secondary' ? undefined : '#rgba(0, 0, 0, 0.30)',
      textShadowOffset:
        type === 'secondary' ? undefined : {height: 1, width: 1},
      textShadowRadius:
        type === 'secondary' || type === 'shade' ? undefined : 1,
      color:
        type === 'secondary'
          ? theme.primary
          : type === 'shade'
          ? theme.text
          : 'white',
    },
  });
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
            ? '#F6F6F6'
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

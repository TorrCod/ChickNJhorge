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
  type?: 'primary' | 'secondary';
};

const Button = ({children, onPress, type}: Props) => {
  const theme = useTheme();
  const localStyles = StyleSheet.create({
    button: {
      textShadowColor:
        type === 'secondary' ? undefined : '#rgba(0, 0, 0, 0.30)',
      textShadowOffset:
        type === 'secondary' ? undefined : {height: 1, width: 1},
      textShadowRadius: type === 'secondary' ? undefined : 1,
      color: type === 'secondary' ? theme.primary : 'white',
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...style,
        ...style.button,
        backgroundColor: type === 'secondary' ? undefined : theme.primary,
        paddingHorizontal: 20,
        borderColor: type === 'secondary' ? theme.primary : undefined,
        borderWidth: type === 'secondary' ? 1 : undefined,
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
      <Text style={localStyles.button}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

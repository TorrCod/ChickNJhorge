import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {theme} from '../styles/style';
import useTheme from '../hooks/useTheme';

type Props = {children: ReactNode; backgroundColor?: string; fontSize?: number};

const CircleCount = ({children, backgroundColor, fontSize}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.numberContainer,
        backgroundColor: backgroundColor ?? theme.primary,
      }}>
      <Text style={{...styles.text, fontSize: fontSize ?? 11}}>{children}</Text>
    </View>
  );
};

export default CircleCount;

const styles = StyleSheet.create({
  numberContainer: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    borderRadius: 100,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textShadowColor: '#rgba(0, 0, 0, 0.30)',
    textShadowOffset: {height: 1, width: 1},
    textShadowRadius: 1,
  },
});

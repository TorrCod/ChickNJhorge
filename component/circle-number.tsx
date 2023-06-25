import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {children: ReactNode; backgroundColor?: string; fontSize?: number};

const CircleCount = ({children, backgroundColor, fontSize}: Props) => {
  return (
    <View
      style={{
        ...styles.numberContainer,
        backgroundColor: backgroundColor ?? 'black',
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
  },
});

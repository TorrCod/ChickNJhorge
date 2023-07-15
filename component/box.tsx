import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import useTheme from '../hooks/useTheme';

type Props = {children: ReactNode; padding?: number};

const Box = ({children, padding}: Props) => {
  const defaultTheme = useTheme();

  const styles = StyleSheet.create({
    box: {
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={{...styles.box, backgroundColor: defaultTheme.backShade}}>
      {children}
    </View>
  );
};

export default Box;

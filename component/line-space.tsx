import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

const LineSpace = () => {
  const theme = useTheme();
  return <View style={{...styles.line, borderColor: theme.text}} />;
};

export default LineSpace;

const styles = StyleSheet.create({
  line: {
    marginVertical: 10,
    borderWidth: 0.2,
  },
});

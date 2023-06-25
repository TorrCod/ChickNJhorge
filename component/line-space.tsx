import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LineSpace = () => {
  return <View style={styles.line} />;
};

export default LineSpace;

const styles = StyleSheet.create({
  line: {
    marginVertical: 10,
    borderWidth: 0.2,
  },
});

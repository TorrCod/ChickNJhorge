import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import Layout from '../layout/layout';
import useTheme from '../hooks/useTheme';
import Search from '../component/search';
import {style} from '../styles/style';

export default ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  return (
    <View style={styles.screen}>
      <Text style={{...style.h2, color: theme.text}}>
        View Order {'>'} OrderId
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {padding: 5},
});

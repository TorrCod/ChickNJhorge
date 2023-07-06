import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import Layout from '../layout/layout';
import useTheme from '../hooks/useTheme';
import Search from '../component/search';

export default ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  return (
    <Layout>
      <Search />
      <Text style={{color: theme.text}}>View Order</Text>
    </Layout>
  );
};

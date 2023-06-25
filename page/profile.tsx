import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';

export default function Profile({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) {
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <View>
        <Text>Profile</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});

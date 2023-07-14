import {
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {ReactNode} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppTitle from '../component/AppTitle';
import Cart from '../component/Cart';
import useTheme from '../hooks/useTheme';

const Layout = ({
  children,
  onCartPress,
  cartFocused,
}: {
  children: ReactNode;
  onCartPress?: () => void;
  cartFocused?: boolean;
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.primary}
      />
      <View style={{...styles.header}}>
        <AppTitle />
        <View style={{position: 'absolute', right: 20}}>
          <TouchableOpacity onPress={onCartPress}>
            <Cart isFocused={cartFocused} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          ...backgroundStyle,
          height: '100%',
        }}>
        <View
          style={{
            paddingHorizontal: 5,
            paddingBottom: 48,
            paddingTop: 30,
          }}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;

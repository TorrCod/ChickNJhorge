import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {style} from '../styles/style';
import useTheme from '../hooks/useTheme';

type Props = {
  onChangeName?: (name: string) => void;
};

const CustomerName = (props: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <View style={{flex: 5}}>
        <TextInput
          style={{...style.h2, margin: 0, padding: 0, color: theme.textPrimary}}
          placeholder="Customer Name"
          onChangeText={props.onChangeName}
          placeholderTextColor={theme.text}
        />
        <Text style={{color: theme.text}}>Cashier Name</Text>
      </View>
      <View>
        <SvgXml color={theme.text} xml={editNameXml} height={30} width={30} />
      </View>
    </View>
  );
};

const editNameXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.83 11.9893C19.6202 11.9893 19.4501 12.1594 19.4501 12.3692V19.3069C19.4501 20.04 18.8535 20.6366 18.1204 20.6366H9.7896C9.05646 20.6366 8.45986 20.04 8.45986 19.3069V10.976C8.45986 10.2429 9.05646 9.64631 9.7896 9.64631H18.1204C18.3302 9.64631 18.5003 9.4762 18.5003 9.26639C18.5003 9.05658 18.3302 8.88647 18.1204 8.88647H9.7896C8.63737 8.88647 7.7 9.82382 7.7 10.976V19.3069C7.7 20.459 8.63737 21.3964 9.7896 21.3964H18.1204C19.2726 21.3964 20.21 20.459 20.21 19.3069V12.3692C20.21 12.1594 20.0399 11.9893 19.83 11.9893Z" fill="currentColor"/>
<path d="M22.7559 6.94696C22.2979 6.48894 21.5527 6.48913 21.095 6.94696L14.5874 13.4548C14.5787 13.4635 14.4805 13.5655 14.4551 13.6227L13.5539 15.6473C13.4899 15.791 13.5211 15.9593 13.6324 16.0705C13.7051 16.1432 13.8023 16.1817 13.9012 16.1817C13.9533 16.1817 14.0058 16.171 14.0555 16.1489L16.0802 15.2477C16.1371 15.2223 16.2393 15.1241 16.2481 15.1154L22.7559 8.60782C22.9778 8.38594 23.1 8.091 23.1 7.7773C23.1 7.46362 22.9778 7.16862 22.7559 6.94696ZM22.2186 8.0704L15.7108 14.5782C15.7097 14.5793 15.7091 14.5806 15.708 14.5816L14.6505 15.0524L15.1213 13.9948C15.1222 13.9937 15.1235 13.9931 15.1246 13.992L21.6323 7.48422C21.789 7.32743 22.0623 7.32762 22.2187 7.48438C22.297 7.56248 22.3402 7.66656 22.3402 7.7773C22.3402 7.88803 22.297 7.99208 22.2186 8.0704Z" fill="currentColor"/>
<circle cx="14" cy="14" r="13.5" stroke="currentColor"/>
</svg>
`;

export default CustomerName;

import moment from 'moment';
import {useState, useCallback} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import Button from './button';
import {SvgXml} from 'react-native-svg';
import useTheme from '../hooks/useTheme';

const PickerMonth = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const theme = useTheme();

  const showPicker = useCallback((value: boolean) => setShow(value), []);

  const onValueChange = useCallback(
    (event: any, newDate: Date) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  return (
    <View>
      <Button width={125} type="shade" onPress={() => showPicker(true)}>
        <View
          style={{
            gap: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{color: theme.text}}>
            {moment(date).format('MMM YYYY')}
          </Text>
          <SvgXml
            color={theme.text}
            width={12}
            height={12}
            xml={arrowDownXml}
          />
        </View>
      </Button>
      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          minimumDate={new Date(2023, 4)}
          maximumDate={new Date(2025, 5)}
          locale="eng"
        />
      )}
    </View>
  );
};

const arrowDownXml = `
<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20842 8.88891C4.84383 8.88891 4.55737 8.69335 4.55737 8.44446V0.444445C4.55737 0.195556 4.84383 0 5.20842 0C5.573 0 5.85946 0.195556 5.85946 0.444445V8.44446C5.85946 8.69335 5.573 8.88891 5.20842 8.88891Z" fill="#424242"/>
<path d="M5.20834 10C5.12296 10.0009 5.0383 9.98653 4.95981 9.95783C4.88133 9.92912 4.81075 9.88672 4.75261 9.83335L0.195313 5.94445C-0.0651043 5.72223 -0.0651043 5.37778 0.195313 5.15556C0.45573 4.93334 0.859377 4.93334 1.11979 5.15556L5.22137 8.65557L9.32294 5.15556C9.58335 4.93334 9.987 4.93334 10.2474 5.15556C10.5078 5.37778 10.5078 5.72223 10.2474 5.94445L5.69012 9.83335C5.55991 9.94446 5.39064 10 5.23439 10H5.20834Z" fill="#424242"/>
</svg>
`;

export default PickerMonth;

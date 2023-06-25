import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {style} from '../styles/style';
import {SvgXml} from 'react-native-svg';
import useMenuContext from '../context/menuContext';

const Product = ({name, price}: Item) => {
  const [count, setCount] = useState(0);
  const addHandle = () => setCount(count + 1);
  const minusHandle = () => setCount(count - 1 < 0 ? count : count - 1);
  const {updateOrderMenu} = useMenuContext();
  const firstRender = useRef(false);

  useEffect(() => {
    if (firstRender.current) updateOrderMenu({name, price, count});
    else firstRender.current = true;
  }, [count]);

  return (
    <View
      style={{
        ...style.productContainer,
        backgroundColor: count ? '#e68e24' : '#D9D9D9',
      }}>
      <Text style={{color: 'black'}}>{name}</Text>
      <Text>₱ {price}</Text>
      {/* {option && <Dropdown label="Option" data={option} onSelect={arg => {}} />} */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 5,
          position: 'absolute',
          bottom: 15,
          right: 15,
        }}>
        <TouchableOpacity onPress={minusHandle}>
          <SvgXml xml={minusXml} />
        </TouchableOpacity>
        <Text style={count ? {color: 'black'} : {}}>{count}</Text>
        <TouchableOpacity onPress={addHandle}>
          <SvgXml xml={addXml} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const minusXml = `
<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="22" height="20" rx="4.5" stroke="black" stroke-opacity="0.7"/>
<line x1="4" y1="10.5" x2="19" y2="10.5" stroke="black" stroke-opacity="0.7"/>
</svg>`;

const addXml = `
<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="22" height="20" rx="4.5" stroke="black" stroke-opacity="0.7"/>
<line x1="11.5" y1="3" x2="11.5" y2="18" stroke="black" stroke-opacity="0.7"/>
<line x1="4" y1="10.5" x2="19" y2="10.5" stroke="black" stroke-opacity="0.7"/>
</svg>
`;

export default Product;

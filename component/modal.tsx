import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../styles/style';
import Button from './button';
import useTheme from '../hooks/useTheme';

type Props = {
  modalVisible: boolean;
  onOk?: () => void;
  children?: React.ReactNode;
  title?: string;
  onCancel?: () => void;
};

const Component = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(props.modalVisible);
  }, [props.modalVisible]);
  const theme = useTheme();

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{...style.center, backgroundColor: '#00000097'}}>
        <View style={{...styles.modalView, backgroundColor: theme.backGround}}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => props.onCancel?.()}>
            <Text>X</Text>
          </TouchableOpacity>
          <View style={{padding: 20}}>
            <Text style={{color: theme.textPrimary, marginBottom: 10}}>
              {props.title ?? 'Title'}
            </Text>
            <View>{props.children}</View>
          </View>
          <View
            style={{
              ...styles.buttonContainer,
              backgroundColor: theme.backShade,
            }}>
            <View style={{width: 75}}>
              <Button onPress={() => props.onOk?.()}>
                <Text style={{color: 'white'}}>Ok</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Component;

const styles = StyleSheet.create({
  modalView: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {},
  buttonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 27,
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 2,
  },
});

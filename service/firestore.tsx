import firestore from '@react-native-firebase/firestore';

export const fetchMenu = async () => {
  if (__DEV__) {
    firestore().useEmulator('localhost', 8080);
  }
  const db = firestore();
  const menu = await db.collection('menu').get();
  return menu;
};

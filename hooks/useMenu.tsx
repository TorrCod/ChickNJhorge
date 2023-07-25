import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';

const useMenuItems = () => {
  if (__DEV__) {
    console.log('\nusing emulators\n');
    firestore().useEmulator('localhost', 8080);
  }

  const [menuItems, setMenuItems] = useState<MenuItems[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = firestore()
      .collection('Menu')
      .onSnapshot(async querySnapShot => {
        const sections: {id: string; name: string}[] = [];
        querySnapShot.forEach(documentSnapShot => {
          sections.push({
            id: documentSnapShot.id,
            name: documentSnapShot.data().section,
          });
        });

        const data: MenuItems[] = await Promise.all(
          sections.map(async section => {
            let menu: {name: string; price: number}[] = [];
            const querySnapShot = await firestore()
              .collection('Menu')
              .doc(section.id)
              .collection('menu')
              .get();

            querySnapShot.forEach(documentSnapShot => {
              menu.push(
                documentSnapShot.data() as {name: string; price: number},
              );
            });
            return {section: section.name, menu};
          }),
        );
        setMenuItems(data);
      });

    return () => unsub();
  }, []);

  return {loading, menuItems};
};

type MenuItems = {
  section: string;
  menu: {
    name: string;
    price: number;
  }[];
};
export default useMenuItems;

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
        const sections: string[] = [];
        querySnapShot.forEach(documentSnapShot => {
          sections.push(documentSnapShot.data().section);
        });

        const data: MenuItems[] = await Promise.all(
          sections.map(async section => {
            let menu: {name: string; price: number}[] = [];
            const querySnapShot = await firestore()
              .collection('Menu')
              .doc(section)
              .collection('menu')
              .get();

            querySnapShot.forEach(documentSnapShot => {
              menu.push(
                documentSnapShot.data() as {name: string; price: number},
              );
            });
            return {section, menu};
          }),
        );
        setMenuItems(data);

        // for (const section of sections) {
        //   firestore()
        //     .collection('Menu')
        //     .doc(section)
        //     .collection('menu')
        //     .get()
        //     .then(querySnapShot => {
        //       const localMenu: MenuItems[] = [];
        //       querySnapShot.forEach(documentSnapShot => {
        //         localMenu.push({section, menu: documentSnapShot.data() as []});
        //       });
        //       console.log(localMenu);
        //     });
        // }
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

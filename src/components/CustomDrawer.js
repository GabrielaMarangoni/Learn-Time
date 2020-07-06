import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView {...props} >
      <View style={{
      width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',
      marginTop: 25
      }}>
        <Image
        source={require('../img/perfil.png')}
        style={{width: 65, height: 65}}
        />
        <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom:25}}>
          Bem-vindo!
        </Text>
      </View>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}
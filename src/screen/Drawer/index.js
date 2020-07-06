import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../src/pages/Home/';
import Sobre from '../src/pages/Sobre';
import Contato from '../src/pages/Contato';

import CustomDrawer from './src/components/CustomDrawer';

export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

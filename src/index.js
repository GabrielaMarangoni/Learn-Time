import React from 'react';
import { View } from 'react-native';
import Login from './screen/Login';
import Prof from './screen/Prof';
import Drawer from './screen/Drawer';
import Contato from './pages/Contato';
import Router from './routes';
//import Teste2 from './screen/teste2';

//Aqui adicionei o Router que exportamos lá no routes.js
export default function src() {
  return (
    <Router/>
  );
}
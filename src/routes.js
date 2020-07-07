import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/Login';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Bom, vamos lá! Aqui estou criando uma navegação Stack (aquela que geralmente 
// é feita por botões) onde ficarão telas em que o usuário não precisa estar logado
// para mexer.
function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

// Aqui, como você escolheu, há a navegação entre as telas quando um usuário já
// está logado.
function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Sobre" component={Sobre}/>
      <Drawer.Screen name="Contato" component={Contato}/>
    </Drawer.Navigator>
  )
} 

// Aqui é onde as duas navegações interagem afinal, depois que o usuário insere
// seus dados ele passa para a Home e nessa Home não há mais a navegação Stack e
// sim a navegação Drawer. Perceba que usamos o NavigationContainer como pai do
// Stack.Navigator, que por sua vez e pai de duas telas que se comunicam através 
// de um botão como 'Login', por exemplo. Perceba também, que foi usada uma 
// propriedade options... por padrão, as navegações Stacks mostram aquela barra
// com o nome da tela a ser exibida, em algums momentos, para mim a maioria, isso
// acaba tirando a beleza do aplicativo. 
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }}/>
        <Stack.Screen name="App" component={App} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Por fim exportamos por padrão a função Router. Ela que será a responsável sobre
// as navegações do seu aplicativo. Tudo isso por que nela há duas screens que são
// os dois tipos de navegações criados. Simples neh? XP

// Para testar somente o Drawer, basta tirar o <Stack.Screen name="Auth"..../>
// Obs: Mudei as versões do react-navigation no package.json do projeto
export default Router;
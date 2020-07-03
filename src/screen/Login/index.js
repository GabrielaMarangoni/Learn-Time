import React from 'react';
import { StatusBar, Text, View, KeyboardAvoidingView } from 'react-native';
import logo from '../../images/logoPrincipal.png';
import Icon from 'react-native-vector-icons/Fontisto';
import { Logo, TextInput, ViewInput, TextButton, ButtonGroup} from '../../components/styles.js';

export default function Login(){
  return(
    <>
    <StatusBar backgroundColor = '#2b5f93' barStyle = 'light-content'/> 
      <Container>
        <Logo source = {logo}/> 

        <ViewInput>
          <Icon style = {{marginTop: '3%', marginRight: '3%'}} size = {30} name = 'email' color = '#FFF'/>
          <TextInput placeholder = 'Email' placeholderTextColor = '#FFF'></TextInput>
        </ViewInput>
        
        <ButtonGroup>
       
          <TextButton color = '#00bfff' top = '9%'> Helo</TextButton>
        </ButtonGroup>
        
      </Container>
    
    </>
  );
}
import React from 'react';
import { StatusBar, Text, View, KeyboardAvoidingView, SafeAreaView, StyleSheet, Image} from 'react-native';
import logo from '../../images/logoPrincipal.png';
import Icon from 'react-native-vector-icons/Fontisto';
import { Container, Logo, TextInput, ViewInput, TextButton, ButtonGroup} from '../../components/styles.js';

export default function Prof(){
  return(
    <>
    <StatusBar backgroundColor = '#D21F3C' barStyle = 'light-content'/> 
    <SafeAreaView>
      <View>
        <Image
        source = {require('./src/images')}
        />
      </View>

    </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  header:{

  },

});
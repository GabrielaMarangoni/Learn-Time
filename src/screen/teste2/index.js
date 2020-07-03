import React, { useState } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text, CheckBox } from "react-native"
//import CheckBox from '../../components/checkbox.js';



export default function App() {

  //const [check, setCheck] = useState(false)

  function handleCheck() {
    setCheck(!check);
  }
  const [check, setcheck] = useState(true);

  return (
    <>
      <StatusBar backgroundColor="#f47e10" />
      <View style={styles.Container}>

        {/* Esse é o nosso lindo checkBox */}
        <CheckBox
          label="Esse é um checkbox"
          labelStyle={{ color: '#fff', fontSize: 16 }}
          iconColor="#fff"
          checkColor="#fff"
          value={check}
          onPress={() => { setcheck(true)}}
        />
        <CheckBox
          label="Esse é um checkbox"
          labelStyle={{ color: '#fff', fontSize: 16 }}
          iconColor="#fff"
          checkColor="#fff"
          value={check}
          onPress={() => { setcheck(false)}}
        />

        <TouchableOpacity style={ check ? styles.active : styles.inative } onPress={() => { 
            setcheck(true) //essa parte do div é o ButtonGruop
        }}>
            <Text style={ check ? styles.text_active : styles.text_inative }>Aluno</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ check ? styles.inative : styles.active } onPress={() => {
            setcheck(false) 
        }}>
            <Text style={ check ? styles.text_inative : styles.text_active }>Professor</Text>
        </TouchableOpacity>
        <View>
            <View>
                {check ? (
                        <View>
                            <CheckBox
          label="Esse é um checkbox"
          labelStyle={{ color: '#fff', fontSize: 16 }}
          iconColor="#fff"
          checkColor="#fff"
          value={check}
          
        />

                        </View>
                ) : (
                        <View>
                            <CheckBox
                                label="Esse é um checkbox"
                                labelStyle={{ color: '#fff', fontSize: 16 }}
                                iconColor="#fff"
                                checkColor="#fff"
                                value={check}
                                
                                />

                             </View>
                )}
            </View>
        
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: '#f47e10',
    padding: 20
  }
})
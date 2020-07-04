import React, {useState, useEffect} from 'react';
//import { Checkbox } from 'react-native-paper';
//import StyleSheet from 'react-native-extended-stylesheet';
import { 
    StatusBar, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Animated,
} from 'react-native';

import logo from '../../images/logo.png';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/Feather';

import {Logo} from '../../components/styles.js';

export default function Teste(){

    const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
    const [opacity] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue:0,
                speed:4,
                bounciness: 20
            }),
            Animated.timing(opacity,{
                toValue:1,
                duration:1500
            })
        ]).start();       
    }, [] );
    const [optionOne, setOptionOne] = useState(true);
    const [optionTwo, setOptionTwo] = useState(true);

    const [check, setCheck] = useState(false)
        function handleCheck() {
        setCheck(!check);
    }
    return (    
        <>    
        <StatusBar backgroundColor = '#D21F3C' barStyle = 'light-content'/> 
        <KeyboardAvoidingView style = {styles.background}>
        
            <View >
                <Logo 
                style = {{
                    width: 250,
                    height: 230
                }}
                source = {logo}/>                 
            </View> 
            
            <View style={ styles.div }> 
                <TouchableOpacity style={ optionOne ? styles.active : styles.inative } onPress={() => { 
                    setOptionOne(true) //essa parte do div é o ButtonGruop
                }}>
                    <Text style={ optionOne ? styles.text_active : styles.text_inative }>Existing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ optionOne ? styles.inative : styles.active } onPress={() => {
                    setOptionOne(false) 
                }}>
                    <Text style={ optionOne ? styles.text_inative : styles.text_active }>New</Text>
                </TouchableOpacity>
            </View>

            <View>
                { optionOne ? (
                    <Animated.View style={[
                        styles.white,
                        {
                            opacity: opacity,
                            transform: [ 
                                { translateY: offset.y }
                            ]
                        }
                    ]}>
                        <View style = {styles.icons} marginTop = '5%'> 
                            <Icon2 size = {30} name = 'email' color = '#000'/>
                            <TextInput 
                            style = {styles.input}
                            placeholder = 'Email'
                            autoCorrect = {false} // para nao corrigir nda ao digitar o email
                            onChangeText = { () => {}}
                            keyboardType = 'email-address'
                            />
                        </View>
                        
                        <View style = {styles.icons} marginTop = '8%' >
                            <Icon2 size = {30} name = 'account-key' color = '#000'/>
                            <TextInput 
                            style = {styles.input}
                            placeholder = 'Password'
                            autoCorrect = {false} // para nao corrigir nda ao digitar o email
                            onChangeText = { () => {}}
                            keyboardType ='visible-password'
                            /> 
                        </View>
                        
                        <View style = {styles.container}>
                            <View style = {styles.container2}>
                                <TouchableOpacity style = {styles.buttomLogin}>
                                    <Text style = {styles.textEnter}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style = {styles.buttomForgot}>
                                <Text style = {styles.textForgot}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                                        
                    </Animated.View>
                ) : (
                    <Animated.View style = {styles.white}>
                        <View style={ styles.div2 }> 
                            <TouchableOpacity style={ optionTwo ? styles.active2 : styles.inative2 } onPress={() => { 
                                setOptionTwo(true) //essa parte do div é o ButtonGruop
                            }}>
                                <Text style={ optionTwo ? styles.text_active2 : styles.text_inative2 }>Aluno</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ optionTwo ? styles.inative2 : styles.active2 } onPress={() => {
                                setOptionTwo(false) 
                            }}>
                                <Text style={ optionTwo ? styles.text_inative2 : styles.text_active2 }>Profissional</Text>
                            </TouchableOpacity>
                        </View>
                        { optionTwo ? (
                         <View >
                            <View style = {styles.icons} marginTop = '2%'> 
                                <Icon2 size = {30} name = 'account' color = '#000'/>
                                <TextInput 
                                style = {styles.input2}
                                placeholder = 'Name'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                
                                />
                            </View>
                            <View style = {styles.icons} marginTop = '5%'> 
                                <Icon2 size = {30} name = 'email' color = '#000'/>
                                <TextInput 
                                style = {styles.input2}
                                placeholder = 'Email'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType = 'email-address'
                                />
                            </View>                        
                            <View style = {styles.icons} marginTop = '5%' >
                                <Icon2 size = {30} name = 'account-key' color = '#000'/>
                                <TextInput 
                                style = {styles.input2}
                                placeholder = 'Password'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType ='visible-password'
                                /> 
                            </View>
                            <View style = {styles.icons} marginTop = '5%' >
                                <Icon2 size = {30} name = 'account-key' color = '#000'/>
                                <TextInput 
                                style = {styles.input2}
                                placeholder = 'Confirmation'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType ='visible-password'
                                /> 
                            </View>
                            <View style = {styles.container}>
                                    <TouchableOpacity style = {styles.buttomSingUp}>
                                        <Text style = {styles.textEnter}>Sing Up</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        ) : (
                        <View>
                            <View style = {styles.icons} marginTop = '2%'> 
                                <Icon2 size = {30} name = 'account' color = '#000'/>
                                <TextInput 
                                style = {styles.input3}
                                placeholder = 'Name'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                
                                />
                            </View>
                            <View style = {styles.icons} marginTop = '5%'> 
                            <Icon2 size = {30} name = 'account-circle' color = '#000'/>
                                <TextInput 
                                style = {styles.input3}
                                placeholder = 'CPF'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType = 'number-pad'
                                />
                            </View>
                            <View style = {styles.icons} marginTop = '5%'> 
                                <Icon2 size = {30} name = 'email' color = '#000'/>
                                <TextInput 
                                style = {styles.input3}
                                placeholder = 'Email'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType = 'email-address'
                                />
                            </View>                        
                            <View style = {styles.icons} marginTop = '5%' >
                                <Icon2 size = {30} name = 'account-key' color = '#000'/>
                                <TextInput 
                                style = {styles.input3}
                                placeholder = 'Password'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType ='visible-password'
                                /> 
                            </View>
                            <View style = {styles.icons} marginTop = '5%' >
                                <Icon2 size = {30} name = 'account-key' color = '#000'/>
                                <TextInput
                                style = {styles.input3}
                                placeholder = 'Confirmation'
                                autoCorrect = {false} // para nao corrigir nda ao digitar o email
                                onChangeText = { () => {}}
                                keyboardType ='visible-password'
                                /> 
                            </View>
                            <View style = {styles.container}>
                                    <TouchableOpacity style = {styles.buttomSingUp2}>
                                        <Text style = {styles.textEnter}>Sing Up</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        )}
                       
                    </Animated.View>
                )}

            </View>
            
        </KeyboardAvoidingView>
    </>);
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: '#D21F3C'
    },
    div: { 
        display: 'flex', 
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, .2)',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        borderRadius: 50,
        padding: 5
      },
      div2: { 
        display: 'flex', 
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        borderRadius: 50,
        padding: 2
      },
      active: {
        flex: 1,
        backgroundColor: '#FFF',
        width: '50%',
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
      inative: {
        flex:1,
        backgroundColor: 'transparent',
        width: '50%',
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text_active: {
        fontSize: 18,
        fontWeight: "700",
        color: 'rgba(0, 0, 0, 0.8)'
      },
      text_inative : {
        fontSize: 18,
        fontWeight: "700",
        color: '#FFF'
      },
      active2: {
        flex: 1,
        backgroundColor: 'transparent',
        width: '5%',
        height: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inative2: {
        flex:1,
        backgroundColor: 'transparent',
        width: '0%',
        height: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text_active2: {
        fontSize: 18,
        fontWeight: "700",
        color: 'rgba(0, 0, 0, .7)'
      },
      text_inative2 : {
        fontSize: 18,
        fontWeight: "700",
        color: 'rgba(0, 0, 0, .2)'
      },
      white: {
        backgroundColor: '#FFF',
        width: '90%',
        height: '75%',
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    container:{
        //flex:1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 40,
    },
    container2:{
        backgroundColor: 'transparent',
        width: '90%',
        height: '40%',
        marginTop: 25,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons:{
        backgroundColor: '#efefef',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '100%',
        borderRadius: 5,       
    },
    input:{
        backgroundColor: 'transparent',
        width: '90%',
        marginLeft: 5,
        color: '#222',
        fontSize: 17,
        borderRadius: 5, 
        
    },
    input2:{
        backgroundColor: 'transparent',
        width: '90%',
        marginLeft: 5,
        color: '#222',
        fontSize: 17,
        borderRadius: 5, 
        
    },
    input3:{
        backgroundColor: 'transparent',
        width: '90%',
        height: 40,
        marginLeft: 5,
        color: '#222',
        fontSize: 17,
        borderRadius: 5,        
    },
    buttomLogin:{
        backgroundColor: '#7E191B',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
       
    },
    buttomForgot:{
        marginTop: '25%',
    },
    buttomSingUp:{
        backgroundColor: '#7E191B',
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        marginTop: '9%'
    },
    buttomSingUp2:{
        backgroundColor: '#7E191B',
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        marginTop: '5%'
    },
    textEnter:{
        color: '#FFF',
        fontSize: 25
    }, 
    textForgot:{
        fontSize: 20,
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
});
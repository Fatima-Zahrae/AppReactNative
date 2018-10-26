'use strict'

import React from 'react';
import { TouchableOpacity , ImageBackground, Alert , StyleSheet, Text, View  , TextInput , TouchableHighlight , SectionList , Button} from 'react-native';
import { StackNavigator ,  Navigator , Navigation } from 'react-navigation';


class vistaLogin extends React.Component {
  state = {
    email: '',
    password: ''
 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
 }
 render() {
    return (
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1525090298416-3e4b39f58538?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82d071cfa571da24668518bedff37719&auto=format&fit=crop&w=1050&q=80'}} 
      style={styles.container}
      >
       <View style = {styles.campoDedatos} >
        <Text style = {styles.textoSesion}>Iniciar mi Sesion </Text>
          <TextInput  style = {styles.input}Inputs
             underlineColorAndroid = "transparent"
             placeholder = "Email"
             placeholderTextColor = "gray"
             autoCapitalize = "none"
             onChangeText = {this.handleEmail}/>
          
          <TextInput secureTextEntry={true} 
             style ={styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Password"
             placeholderTextColor = "gray"
             autoCapitalize = "none"
             onChangeText = {this.handlePassword}/>
          
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.login(this.state.email, this.state.password)
             }
             //onPress={() => navigate('App')}
             >
             <Text style = {styles.textoBoton}> Login </Text>
          </TouchableOpacity>
       </View>
      </ImageBackground>
    )
 }
}


  const styles = StyleSheet.create({
    submitButton: {
      backgroundColor: 'red',
      width: 300,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 50,
      borderRadius: 6,
      margin: 15,

    },
    container: {
        flex: 1,
        backgroundColor: 'lightcyan',
        alignItems: 'center',
      },
  
    textoBoton: {
        color: 'white',

    },

    textoSesion: {
        fontSize: 25,
         paddingLeft: 70,
         paddingRight: 50,
         color: 'green'
    }, 
    input: {
      margin: 15,
      borderColor: 'green',
      borderWidth: 1,
      width: 300,
      height: 30,
      justifyContent: 'center',
      borderRadius: 6,
      alignItems: 'center',
      paddingLeft: 10
   },
   campoDedatos: {
     marginTop: 100
   }
  });
  module.exports = vistaLogin;

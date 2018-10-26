/*import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


class Inputs extends Component {
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
         <View style = {styles.container}>
            <TextInput  style = {styles.input}Inputs
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               /*onPress = {
                  () => this.login(this.state.email, this.state.password)
               }*/
              /* onPress={() => navigate('App')}
               >
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 36,
      borderColor: 'green',
      borderWidth: 1,
      width: 200
   },
   submitButton: {
      backgroundColor: 'green',
      padding: 10,
      margin: 15,
      height: 40,
     /* margin: 'center',*/
  /* },
   submitButtonText:{
      color: 'white'
   }
})

export default Inputs;*/
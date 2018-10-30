// Home.js

import React, { Component } from 'react';
import { View, Text , TouchableOpacity ,StyleSheet , ImageBackground ,TouchableHighlight } from 'react-native';

export class Home extends Component {
  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

  render() {
    return (
      <ImageBackground source={{uri:'https://i.pinimg.com/474x/ec/66/14/ec66140484bc49a8da0e3dd027a176d9--screen-wallpaper-iphone--wallpaper.jpg'}} 
      style={styles.container}
      >
      <View>
        <Text style={styles.textoPantalla}>This is the home screen</Text>
      
        <TouchableOpacity style = {styles.detalleButton} onPress={() => this.props.navigation.navigate('MyScreen')} title="Login">
        <Text style = {styles.textoBoton}> Más detalles </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightcyan',
      alignItems: 'center',
      justifyContent: 'center'
    },

  textoBoton: {
      color: 'white',

  },
 detalleButton: {
  backgroundColor: 'green',
  width: 300,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40,
  marginBottom: 50,
  borderRadius: 6,
  margin: 15,
 },
 textoPantalla: {
  fontSize: 25,
   color: 'black',
   justifyContent: 'center',
   marginLeft: 25,
   marginRight: 25
}, 
});


export default Home
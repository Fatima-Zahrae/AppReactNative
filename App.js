import React from 'react';
import { ImageBackground , View, Text, Button ,StyleSheet} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Inputs from './src/components/vistaLogin';
//import ejecucionVista from './src/components/ejecucionVista'
class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1538558940285-e76825003c99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee24d88663cd26779d898a6435f8ece4&auto=format&fit=crop&w=1350&q=80'}} 
      style={styles.container}
      >
      <View style={styles.contenido}>
        <Text  style={styles.textoEntrada} >Bienvenido a mi App !</Text>
        <Button style={styles.botonDetalle}
          title="Ver Aplicacion"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
              
            }))
          }}
        />

      </View>
      </ImageBackground>
    );
  }  
}


class vistaLogin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Inputs />
      </View>
    );
  }  
}



export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: vistaLogin,
  },
}, 
{
    initialRouteName: 'Home',
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightcyan',
      alignItems: 'center',
    },
  contenido: {
    marginTop: 200,
    width: 300,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    },
    botonDetalle: {
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
    textoEntrada: {
      fontSize: 25,
       color: 'black',
       justifyContent: 'center'
  }, 

});
import React from 'react';
import { ImageBackground, Alert , StyleSheet, Text, View  , TextInput , TouchableHighlight , SectionList , Button} from 'react-native';
import { StackNavigator ,  Navigator , Navigation } from 'react-navigation';


// llamada  a los archivos externos (vistaLogon y ejeccioLogin)
const Login =  require('./src/components/vistaLogin');
const Dashboard =  require('./src/components/ejecucionVista');


export default class inicio extends React.Component {

//para cargar el navigator y mostrar el contenido dependiendo de la ruta 
/*renderScene(route, navigator){
  switch (route.name){
    case 'vistaLogin':
      return(
        <Login navigator={navigator} route={route}/>
      );
    case 'ejecucionVista':
    return(
      <Dashboard navigator={navigator} route={route}/>
    );
  }
}*/
render() {
    return (
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1525090298416-3e4b39f58538?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82d071cfa571da24668518bedff37719&auto=format&fit=crop&w=1050&q=80'}} 
      style={styles.container}
      >
      <View >
      <Text style={styles.titulo}>Bienvenidos a mi aplicacion de React Native!</Text>
      <Button style={styles.textoBoton}
          title="Login"
          onPress={() => this.props.navigation.navigate('Details')}
      />
      </View>
      </ImageBackground>
    
    );
  }
}


const styles = StyleSheet.create({
  atras: {
    marginTop: 10,
    marginLeft:20,
    color:'#007AFF',
  },
  titulo: {
      marginTop: 10,
      marginLeft:20,
      color:'#007AFF',
  }


});


const RootStack = StackNavigator(
  {
    Home: {
      screen: inicio,
    },
    Details: {
      screen: ejecucionVista,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

/*var Login = require('./src/components/vistaLogin')

AppRegistry.registerComponent('DEMO3', () => 'DEMO3');*/
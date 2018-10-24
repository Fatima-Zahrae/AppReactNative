/*import React from 'react';
import { AppState , StyleSheet, Text, View , Button , TextInput , TouchableHighlight , SectionList} from 'react-native';
import DefaultInput from './prueba';
import Inputs from './datos';
/*import AppStateExample from './entrada';*/

/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bienvenidos a mi aplicacion de React Native!</Text>
        <Inputs />
        <TextInput placeholder='Introduce tu nombre' />
          <View style={styles.buttonContainer}>
            <Button 
              title='clic me'
              color="green"
              onPress={buttonClicked}/>
          </View>
      </View>
    );
  }
}
const buttonClicked = () => {
  alert('has pulsado')
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});*/


import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Inputs from './datos';
import App from './FirstScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Bienvenidos a mi aplicacion de React Native!</Text>
        <Inputs />
        <App />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

/*export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}*/





/*import React from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './src/components/SecondScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({

 First: { screen: FirstScreen },

 Second: { screen: SecondScreen },
},

{
 initialRouteName: 'First',
});

export default class App extends React.Component {
 render() {
   return <RootStack />;
 }
}*/











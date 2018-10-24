import React from 'react';
import { AppState , StyleSheet, Text, View , Button , TextInput , TouchableHighlight , SectionList} from 'react-native';
import DefaultInput from './prueba';
import Inputs from './datos';
/*import AppStateExample from './entrada';*/

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bienvenidos a mi aplicacion de React Native!</Text>
       
        <TextInput placeholder='Introduce tu nombre' />
          
      </View>
    );
  }
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
});

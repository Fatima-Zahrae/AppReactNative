'use strict'

import React from 'react';
import { StyleSheet, Text, View , Button , TextInput , TouchableHighlight , SectionList} from 'react-native';


class ejecucionVista extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Ejecucion de la Vista !</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightcyan',
        alignItems: 'center',
      },
    titulo: {
        fontSize: 16,
    }
  
  });

  module.exports = ejecucionVista;
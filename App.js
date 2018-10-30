// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Settings from './src/components/Settings';
import Home from './src/components/Home';
import screen from './src/components/screen'

const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home },
  MyScreen: {screen: screen}
  
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
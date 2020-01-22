/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import {createAppContainer} from 'react-navigation';
 import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';
import Main from './tela_inicial/Main.js'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  Bla: {screen: Main},
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return (
    <AppContainer />
  );
};

const styles = StyleSheet.create({

});

export default App;

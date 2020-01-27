/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import {createAppContainer, StackNavigator} from 'react-navigation';
 import {createStackNavigator} from 'react-navigation-stack';
 import {createDrawerNavigator} from 'react-navigation-drawer'

import React from 'react';
import Main from './components/tela_inicial/Main.js'
import Home from './components/tela_inicial/Home.js'
import GenerateNameContainer from './container/GenerateNameContainer.js'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStore} from 'redux';
import reducers from './redux/reducers';
import {Provider} from 'react-redux';

const headerColor = "#01172f";

const Stack = createStackNavigator(
  {
    Main: {screen: Main},
    GenerateName: {screen: GenerateNameContainer}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: headerColor,
        },
        headerTintColor: '#fff',
    }
  }
)

Stack.navigationOptions = {
  title: "Gerador de apelido"
}

const MainNavigator = createDrawerNavigator(
  {
    Home: {screen: Home},
    GenerateName: {screen: Stack},
  },
  {
    drawerBackgroundColor: '#000c19',
    contentOptions: {
      activeTintColor: '#ff1a5a',
      activeBackgroundColor: '#f91a5859',
      inactiveTintColor: '#fff',
    }
  }
);

const AppContainer = createAppContainer(MainNavigator)

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.baseScreen}>
        <StatusBar backgroundColor={headerColor}/>
        <AppContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({

  baseScreen: {
    flex: 1,
    flexDirection: "column",
  },

});

export default App;

import React, {useEffect, useState} from 'react'
import InputDateContainer from '../../container/InputDateContainer.js'
import Background from '../background/Background.js'
import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList
} from 'react-native';

const src = require('../../images/nebula.png');

const headerColor = "#01172f";

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "white",
    backgroundColor: headerColor,
    padding: 10,
  },
});
const Main = (props) => {
  return(
    <View style={{flex: 1}}>
      <Background />
      <View style={{flex:0}}>
        <Text style={styles.title}>Gerador de apelido para sinuca</Text>
      </View>
      <InputDateContainer navigation={props.navigation}/>
    </View>
  )
}

Main.navigationOptions = {
  headerShown: false,
  title: 'Gerador de apelido',
};

export default Main

import React, {useEffect, useState} from 'react'
import InputDate from '../input_date/InputDate.js'
import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList
} from 'react-native';

const src = require('../images/nebula.png');

const headerColor = "#01172f";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
  },
  baseScreen: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 40,
    color: "white",
    backgroundColor: headerColor,
  },
});
const Main = (props, {navigation}) => {
  const [bla, setBla] = useState('');
  return(
    <View style={styles.baseScreen}>
      <Image source={src} style={styles.image}/>
      <StatusBar backgroundColor={headerColor}/>
      <View style={{flex:0}}>
        <Text style={styles.title}>Gerador de apelido para sinuca</Text>
      </View>
      <InputDate />
    </View>
  )
}

Main.navigationOptions = {
  headerShown: false,
};

export default Main

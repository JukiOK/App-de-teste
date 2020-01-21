import React, {useEffect, useState} from 'react'

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
  }
});

function Oi(props){
  return (
    <View style={{alignItems: 'center', width: 50, height: 50, backgroundColor: "powderblue"}}>
      <Text>{props.text}</Text>
    </View>
  )
}

function Main(props) {

  const [bla, setBla] = useState('');
  return(
    <View style={styles.baseScreen}>
      <Image source={src} style={styles.image}/>
      <StatusBar backgroundColor={headerColor}/>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Gerador de apelido para sinuca</Text>
      </View>
    </View>
  )
}

export default Main

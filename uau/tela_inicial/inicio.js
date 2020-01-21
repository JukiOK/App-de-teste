import React, {useEffect, useState} from 'react'

import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

const src = require('../images/night-sky.jpg');

const styles = StyleSheet.create({
  image: {
    resizeMode: "center",
    width: "50%",
    height: 50,
    backgroundColor: "skyblue",
  },
  baseScreen: {
    flex: 1,
    flexDirection: "column",
  },
  textInput: {
    height: 50,
    backgroundColor: "white",
    color: "steelblue",
  },
  container: {
    padding: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "pink",
    width: 100,
    height: 50,
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

  function handleClick(){
    alert("clicked")
  }

  const [bla, setBla] = useState('');
  return(
    <View style={styles.baseScreen}>
      <Oi text={"oi"} />
      <Image source={src} style={styles.image}/>
      <View style={{backgroundColor: "steelblue", width: "100%", padding: 10, height: "auto"}}>
        <TextInput style={styles.textInput} onChangeText={(text) => setBla(text)} value={bla}/>
        <Text style={{padding: 10, fontSize: 40, color: "white", width: "auto", height: "auto"}}>
          {
            bla.split(' ').map((word) => {
              return (
                word && 'bla'
              )
            }).join(' ')
          }
        </Text>
      </View>
      <Button onPress={() => handleClick()} color="#841584" title="test"/>
      <View style={styles.container}>
        <TouchableHighlight  onPress={() => handleClick()} underlayColor="white">
          <View style={styles.button}></View>
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={() => handleClick()}>
          <View style={styles.button}></View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

export default Main

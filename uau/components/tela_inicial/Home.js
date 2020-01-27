import React, {useEffect, useState} from 'react'
import Background from '../background/Background.js'
import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList, Picker, Animated
} from 'react-native';

const headerColor = "#01172f";

function FadeIn(props){
  const [fadeAn] = useState(new Animated.Value(0))
  const [position] = useState(new Animated.Value(0))
  useEffect(() => {
    Animated.sequence([
      Animated.timing(
        fadeAn, {
          toValue: 1,
          duration: 10000,
        }
      ),
      Animated.spring(position, {
        toValue: 20,
      })
    ]).start()
  }, [])
  return(
    <Animated.View style={{...props.style, opacity: fadeAn, left: position, position: "relative"}>
      {props.children}
    </Animated.View>
  )
}

function Home(props){
  return (
    <View style={{flex:1}}>
      <Background />
      <View>
        <Picker style={{height: 50, width: '100%'}}>
          <Picker.Item label="bka"/>
        </Picker>
        <FadeIn style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text>Oi</Text>
        </FadeIn>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "white",
    backgroundColor: headerColor,
    padding: 10,
  },
});

  export default Home

import React, {useEffect, useState} from 'react'
import Background from '../background/Background.js'
import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList, Picker, Animated
} from 'react-native';

const headerColor = "#01172f";

function InfiniteLoop(props){
  const [rotateValue] = useState(new Animated.Value(0))
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 400,
        Infinite: true,
      })
    ).start();
  })

  return(
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Animated.View
        style={{
              transform: [
                {
                  rotate: rotateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "380deg"]
                  })
                }
              ],
              height: 50,
              width: 50,
              margin: 5,
              borderWidth: 2,
              borderColor: "#888",
              borderBottomColor: "#8bffff",
              borderRadius: 50,
              justifyContent: "center"
            }}
        >
          <Text style={styles.text}>Fade </Text>

      </Animated.View>
    </View>
  )
}

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
    <Animated.View style={{...props.style, opacity: fadeAn, left: position, position: "relative"}}>
      {props.children}
    </Animated.View>
  )
}

function Home(props){
  return (
    <View style={{flex:1}}>
      <Background />
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Picker style={{height: 50, width: '100%'}}>
          <Picker.Item label="bka"/>
        </Picker>
        <FadeIn style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text>Oi</Text>
        </FadeIn>
      </View>
      <InfiniteLoop />
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

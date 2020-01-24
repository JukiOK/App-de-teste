import React, {useEffect, useState} from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

const src = require('../../images/nebula.png');

function Background(){
  return (
    <ImageBackground source={src} style={styles.image}/>
  )
}


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
  },
})

export default Background

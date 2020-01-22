import React, {useEffect, useState} from 'react'

import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});

function InputDate(props) {
  return (
    <View style={{flex:2}}>
      <Text style={styles.text}>
        Insira sua data de aniversário:
      </Text>
      <TextInput style={styles.input}>

      </TextInput>
    </View>
  )
}

export default InputDate;

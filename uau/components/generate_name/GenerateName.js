import React, {useEffect, useState} from 'react'

import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList
} from 'react-native';

import Background from '../background/Background.js'
import names from '../../infos/names.js'
import lastNames from '../../infos/lastNames.js'

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  name: {
    color: "white",
    fontSize: 35,
  },
  btnGerar: {
    backgroundColor: "#ff1a5a",
    alignItems: "center",
    width: "40%",
    padding: 10,
    borderRadius: 10,
  }
});

function GenerateName(props) {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const {niverDate} = props;
    let date = niverDate.split('/');
    setName(names[parseInt(date[0])])
    setLastName(lastNames[parseInt(date[1])])
  }, []);

  function handleGenerateRandom(){
    setName(names[Math.floor(Math.random() * Object.keys(names).length + 1)]);
    setLastName(lastNames[Math.floor(Math.random() * Object.keys(lastNames).length + 1)])
  }

  return (
    <View style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <Text style={styles.text}>Seu apelido na sinuca será:</Text>
        <Text style={styles.name}>{name + lastName}</Text>
        <Text style={styles.text}>Se não gostou tente a sorte no aleatório</Text>
        <TouchableHighlight style={styles.btnGerar} underlayColor="#c7004a" onPress={() => handleGenerateRandom()} activeOpacity={0.8}>
          <View>
            <Text style={styles.text}>Gerar</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

GenerateName.navigationOptions = {
  title: "Nome gerado",
};

export default GenerateName

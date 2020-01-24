import React, {useEffect, useState} from 'react'

import {
  StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  FlatList
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    color: "white",
    margin: 20,
    width: 100,
    fontSize: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  btnGerar: {
    backgroundColor: "#ff1a5a",
    alignItems: "center",
    width: "40%",
    padding: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "#ff9191",
    fontSize: 15,
  }
});

function InputDate(props) {
  const [date, setDate] = useState("");
  const [displayError, setDisplayError] = useState(false);
  function handleGenerate(){
    if(dateTime.isValid()){
      setDisplayError(false);
      props.dispatchNiverDate(date);
      props.navigation.navigate('GenerateName');
    }else{
       setDisplayError(true);
    }
  }

  let dateTime;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Insira sua data de aniversário:
      </Text>
      {
        displayError &&
        <Text style={styles.errorText}>Insira uma data válida</Text>
      }
      <TextInputMask style={styles.input} options={{format: 'DD/MM'}} type={'datetime'} value={date} onChangeText={text => setDate(text)} ref={(ref) => dateTime = ref}/>
      <TouchableHighlight style={styles.btnGerar} underlayColor="#c7004a" onPress={() => handleGenerate()} activeOpacity={0.8}>
        <View>
          <Text style={styles.text}>Gerar</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default InputDate;

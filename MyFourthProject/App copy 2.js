import React, {Component, useState} from 'react';
import { Text, TextInput, View } from 'react-native';

export default function WordConvertor {
const [text, setText] = useState(" ")
  return (
 <View style={{padding: 40}}>
  <TextInput
  style={{height: 40}}>
  placeholder="input your text here"
  onChangeText={text => setText{text}}
  defaultvalue={text}
 />
 <Text> style ={{padding: 10, fontSize: 42}>}
 {text.split(' ').map(word) => && "*").join(' ')}
 </Text>
 
 </View>
  );
  }

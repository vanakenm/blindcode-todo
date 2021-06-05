import React from 'react';
import { Text, View } from 'react-native';

export default function Greetings(props) {
  return (
  <View><Text>Bonjour {props.name}</Text></View>
  )
}
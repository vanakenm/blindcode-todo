import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Greetings from './Greetings.js'

const TODOS = [
  {id: 1, title: "Tondre le chien", done: false},
  {id: 2, title: "Promener la pelouse", done: false},
  {id: 3, title: "Cuire la salle de bain", done: true}
]

const onPress = (item) => {
  console.log("Button pressed")
  console.log(item)
}
const renderItem = ({item}) => {
  let check = item.done ? "v" : "x"

  return (
    <View style={styles.item}>
      <Text>{check} {item.title}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        Done
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Greetings name="Bob" />
      <Greetings name="Sarah" />
      <StatusBar style="auto" />
    </View>
    <View style={styles.list}>
      <FlatList data={TODOS} renderItem={renderItem} keyExtractor={item => item.id}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'left',
    margin: '10px'
  },
  item: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    margin: "5px",
    justifyContent: 'space-between '
  },
  button: {
    backgroundColor: "green",
    borderRadius: "3px"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

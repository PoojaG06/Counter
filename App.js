import {React, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

  const App = () => {
    const [mantra, setMantra] = useState();
    const [count, setCount] = useState(0);
    const onPress = () =>  setCount(prevCount => prevCount + 1);

  
  return (
    <View style={styles.container1}>
      <Text style={styles.header}>Counter</Text>
      <Text style={styles.text}>Enter Text here</Text>
      <TextInput style={styles.textInput} placeholder={'Insert Mantra Here'} onChangeText={text => setMantra(text)}/>
      <StatusBar style="auto" />

      <View style={styles.container2}>
      <TouchableOpacity style={styles.button} onPress={() =>  setCount(prevCount => prevCount + 1)} >
        <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() =>  setCount(prevCount => prevCount - 1)} >
        <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>Count: {count}</Text>
        <TouchableOpacity style={styles.buttonReset} onPress={() =>  setCount(0)} >
        <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#0097A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#0097A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 60,
  },
  textInput:{
    height: 60,
    borderWidth: 1,
    padding: 20,
    margin: 10,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    height: 60,
    width: 60,
    margin: 20,
  },
  buttonReset:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    height: 60,
    width:100,
    margin: 20,
  },
  text: {
    fontSize:30,
  }

});

export default App;
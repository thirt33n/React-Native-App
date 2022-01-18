import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TextInput} from 'react-native';    //CSS stuff is imported here
import Username from './components/inputFields';
import Password from './components/passwordField';
import SubmitButton from './components/button';


export default function App() {
    return (
      <View styles={styles.container}>
        <Username />
        <Password />
        <SubmitButton />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'rgba(79, 81, 140, 1.0)',
    margin: 10,
    alignSelf: 'stretch',
    },

  text1: {
    flex: 1,
    fontSize: 500,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue'
  },

});

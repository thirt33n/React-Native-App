import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TextInput} from 'react-native';    //CSS stuff is imported here
import Username from './components/inputFields';
import Password from './components/passwordField';
import SubmitButton from './components/button';


export default function App() {
    return (
      <View styles={styles.container}>
        <Text style={{marginTop:70,fontSize:50,textDecorationLine: 'underline'}}>The Login Page .</Text>
        <View style={{marginTop:-50,}}>
          <Username />
          <Password />
          <SubmitButton />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    alignSelf: 'stretch',
    },


});

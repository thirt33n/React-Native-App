import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';    //CSS stuff is imported here
import { ImageBackground } from 'react-native-web';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'blue'}}>Hi my  is Siddharth P, 20BLC1071 and this is my first app</Text>
      <Image
      source = {{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <TextInput
          placeholder = "Input text here"
          keyboardType='numeric'
        />
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'blue'
  },
  container2: {
    color: 'black',
    backgroundColor: 'white',
    width: 100
  },
});

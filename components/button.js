import React, { Component } from 'react';
import {View,Text,TextInpu,Button,StyleSheet,Alert} from 'react-native';

export default class SubmitButton extends Component{
   render(){
       return(
        <View style={style.button}>
        <Button
            title="Login"
            onPress={() => Alert.alert('Logged in Successfully!')}
      />
    </View>
       );
   }
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        color: 'white',
        width: 100,
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 145,
        marginTop: -180,
    },
});
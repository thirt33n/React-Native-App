import React, { Component } from 'react';
import {View,Text,TextInput } from 'react-native';

export default class Password extends Component{
    state={
        password:" ",
    }
    handleText=(text)=>{
        this.setState({password:text});
    }

    render(){
        return (
            <View>
            <TextInput
              style={{height: 50, borderColor: 'black', 
                      borderWidth: 2,margin:10,
              fontSize:15,borderRadius: 10,marginBottom: 250,}}
              onChangeText={(text) =>this.handleText(text)}
              placeholder="Enter Password"
              value={this.state.text}
              secureTextEntry
              autoCorrect={false}
            />
          </View>
        );
    }
    




}
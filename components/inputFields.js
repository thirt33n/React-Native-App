import React, { Component } from 'react';
import {View,Text,TextInput } from 'react-native';


export default class Username extends Component{
    state={
        username:" ",
    }
    handleText=(text)=>{
        this.setState({username:text});
    }

    render(){
        return (
            <View>
            <TextInput
              style={{height: 50, borderColor: 'black', 
                      borderWidth: 2,margin:10,
              fontSize:15,borderRadius: 10,marginTop: 250,}}
              onChangeText={(text) =>this.handleText(text)}
              placeholder="Enter UserName"
              value={this.state.text}
            />
          </View>
        );
    }
    




}



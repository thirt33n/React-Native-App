import React, { Component } from 'react';
import {View,Text,TextInput } from 'react-native';


export default class Header extends Component {
    state={
        Header:"",
      }
      handleText=(text)=>{
        this.setState({Header:text});
      }
    render(){
    return (
          <Text styles={{color:'blue'}}>LOGIN PAGE</Text>
        );
    }
}
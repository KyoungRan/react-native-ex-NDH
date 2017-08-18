import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class App extends React.Component {
  render() {
    return ( 
      <View style = {
        {
          flex: 1,
          flewDirection: 'row',
          justifyContent: 'space-around'
        }
      } >
      <StatusBar hidden = {true}/>  
      <View style = {
        {
          width: 60,
          height: 60,
          backgroundColor: 'red'
        }
      }/>  
      <View style = {
        {
          width: 60,
          height: 60,
          backgroundColor: 'green'
        }
      }/>  
      <View style = {{
          width: 60,
          height: 60,
          backgroundColor: 'blue'
        }}/>  
      </View>
    );
  }
}
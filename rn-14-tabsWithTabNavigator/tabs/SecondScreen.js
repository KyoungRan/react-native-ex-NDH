import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class SecondScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Tab2'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is Tab 2</Text>
      </View>
    );
  }
}

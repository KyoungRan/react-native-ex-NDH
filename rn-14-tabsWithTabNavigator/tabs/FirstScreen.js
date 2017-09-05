import React, { Component } from 'react';
import { Text, View, Button, Tmage } from 'react-native';

export default class FirstScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Tab1'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is Tab 1</Text>
      </View>
    );
  }
}

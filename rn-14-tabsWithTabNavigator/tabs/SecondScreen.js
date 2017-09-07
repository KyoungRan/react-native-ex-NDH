import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class SecondScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Shopping',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/icon-shopping.png')}
        style={{ width: 22, height: 22, tintColor: 'white' }}
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is Tab 2</Text>
      </View>
    );
  }
}

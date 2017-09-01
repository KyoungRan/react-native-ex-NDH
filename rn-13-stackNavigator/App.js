import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Navigation = StackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen }
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <Navigation />
      </View>
    );
  }
}

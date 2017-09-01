import React, { Component } from 'react';
import { Text, View } from 'react-native';
const util = require('util');

export default class SecondScreen extends Component {
  static navigationOptions = {
    title: 'Second Screen'
  };

  render() {
    console.log(
      'this.props.navigation.state = ' +
        util.inspect(this.props.navigation.state, false, null)
    );
    const { params } = this.props.navigation.state;
    return (
      <View style={{ paddingTop: 20 }}>
        <Text>This is screen 2</Text>
        <Text>
          Params from screen1: {params.name}, email = {params.email}
        </Text>
      </View>
    );
  }
}

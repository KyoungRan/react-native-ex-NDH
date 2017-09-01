import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
const util = require('util');

export default class FirstScreen extends Component {
  static navigationOptions = {
    title: 'First screen'
  };
  render() {
    console.log(
      'this.props.navigation = ' +
        util.inspect(this.props.navigation, false, null)
    );
    const { navigate } = this.props.navigation;
    return (
      <View style={{ paddingTop: 20 }}>
        <Text>This is screen 1</Text>
        <Button
          style={{ paddingTop: 15 }}
          onPress={() =>
            navigate('Second', {
              name: 'Kyoungran',
              email: 'kyoungrankang@gmail.com'
            })}
          title="Go to Screen2"
        />
      </View>
    );
  }
}

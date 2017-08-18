import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChangeText = typedText => {
    this.setState({ text: typedText });
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 50 }}
          placeholder="Type your text here"
          onChangeText={this.handleChangeText}
          value={this.state.text}
        />
        <Text style={{ padding: 20, fontSize: 30 }}>
          Yout type: {this.state.text}
        </Text>
        <StatusBar hidden={true} />
      </View>
    );
  }
}

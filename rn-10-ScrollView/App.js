import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView horizontal={true}>
        <Text
          style={{
            fontSize: 30,
            padding: 20,
            backgroundColor: 'red'
          }}
        >
          This is a text a ScrollView
        </Text>
        <Text
          style={{
            fontSize: 30,
            padding: 20,
            backgroundColor: 'green'
          }}
        >
          This is second Line
        </Text>
        <Image
          source={require('./images/CSNLCbw.jpg')}
          style={{ width: 414, height: 414 }}
        />
        <Text style={{ fontSize: 30, padding: 20, backgroundColor: 'yellow' }}>
          This is 4th line
        </Text>
        <Image
          source={require('./images/YvHYBBB.jpg')}
          style={{ width: 414, height: 414 }}
        />
        <Text style={{ fontSize: 30, padding: 20, backgroundColor: 'blue' }}>
          This is 5th line
        </Text>
      </ScrollView>
    );
  }
}

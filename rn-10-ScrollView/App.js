import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{
          fontSize: 30,
          padding: 20,
          backgroundColor: "red"
        }}>
        This is a text a ScrollView
        </Text>
        <Text style={{
          fontSize: 30,
          padding: 20,
          backgroundColor: "green"
        }}>
        This is second Line
        </Text>
      </ScrollView>
    )
  }
}
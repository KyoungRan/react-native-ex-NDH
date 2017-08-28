import React, { Component } from 'react';
import { View, Image, Text, FlatList } from 'react-native';

export default class FlatListComponent extends Component {
  render() {
    let flowers = [
      { key: 'Lily' },
      { key: 'Holly' },
      { key: 'Jasmine' },
      { key: 'Daisy' },
      { key: 'Alyssum' },
      { key: 'Poppy' },
      { key: 'Violet' },
      { key: 'Ivy' }
    ];
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <FlatList
          data={flowers}
          renderItem={({ item }) =>
            <Text
              style={{ padding: 10, fontSize: 20, height: 44, color: 'red' }}
            >
              Each item is : {item.key}
            </Text>}
        />
      </View>
    );
  }
}

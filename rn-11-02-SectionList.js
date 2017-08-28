import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';

export default class SectionListComponent extends Component {
  render() {
    let sectionData = [
      {
        key: 'A',
        title: 'A',
        data: [{ key: 'Alexander' }, { key: 'Alan Turing' }]
      },
      {
        key: 'B',
        title: 'B',
        data: [{ key: 'Brooke' }, { key: 'Barbara' }, { key: 'Brenda' }]
      },
      {
        key: 'C',
        title: 'D',
        data: [
          { key: 'David' },
          { key: 'Dylan' },
          { key: 'Diego' },
          { key: 'Dakota' }
        ]
      }
    ];
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <SectionList
          sections={sectionData}
          renderItem={({ item }) =>
            <Text style={{ padding: 10, color: 'green' }}>
              {item.key}
            </Text>}
          renderSectionHeader={({ section }) =>
            <Text style={{ padding: 10, color: 'blue', fontSize: 20 }}>
              {section.title}
            </Text>}
        />
      </View>
    );
  }
}

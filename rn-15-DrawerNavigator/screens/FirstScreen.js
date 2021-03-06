import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class FirstScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Screen 1',
    drawerIcon: ({ tintColor }) => {
      console.log('tintColor = ' + tintColor);
      return (
        <MaterialIcons
          name="card-membership"
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'green' }}>Screen 1</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open DrawNavigator"
        />
      </View>
    );
  }
}

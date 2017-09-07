import React from 'react';
import { View, Text } from 'react-native';

import { TabNavigator } from 'react-navigation';
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';

const MainScreenNavigator = TabNavigator(
  {
    Tab1: { screen: FirstScreen },
    Tab2: { screen: SecondScreen }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'darkgreen',
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'green',
      labelStyle: {
        fontSize: 16,
        padding: 0
      }
    }
  }
);

MainScreenNavigator.navigationOptions = {
  title: 'Tab example'
};

export default MainScreenNavigator;

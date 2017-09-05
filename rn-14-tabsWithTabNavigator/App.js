import React from 'react';
import { View, Text } from 'react-native';

import { TabNavigator } from 'react-navigation';
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';

const MainScreenNavigator = TabNavigator({
  Tab1: { screen: FirstScreen },
  Tab2: { screen: SecondScreen }
});

MainScreenNavigator.navigationOptions = {
  title: 'Tab example'
};

export default MainScreenNavigator;

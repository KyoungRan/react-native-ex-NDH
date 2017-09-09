import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ListView,
  Alert
} from 'react-native';

export default class App extends React.Component {
  render() {
    const osName = Platform.OS === 'android' ? 'android' : 'ios';
    Alert.alert(osName + '. Version is: ' + Platform.Version);
    return <View style={styles.mainView} />;
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 100 : 20,
    ...Platform.select({
      ios: {
        backgroundColor: 'green'
      },
      android: {
        backgroundColor: 'red'
      }
    })
  }
});

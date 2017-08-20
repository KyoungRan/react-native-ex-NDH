import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Alert,
  Button,
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

export default class App extends Component {
  handlePressButton = () => {
    Alert.alert('You pressed the button!');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Button
          style={styles.insideButton}
          onPress={this.handlePressButton}
          title="Press me now!"
          color="#2f4f4f"
        />
        <TouchableHighlight
          style={styles.insideButton}
          onPress={this.handlePressButton}
          underlayColor="red"
        >
          <Text style={styles.insideButton}>Touchable hightlight</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.insideButton}
          onPress={this.handlePressButton}
          undelayColor="blue"
        >
          <Text style={styles.insideButton}>This is TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableNativeFeedback
          style={styles.insideButton}
          onPress={this.handlePressButton}
          undelayColor="red"
        >
          <View>
            <Text style={styles.insideButton}>
              This is TouchableNativeFeedback
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
          style={styles.insideButton}
          onPress={this.handlePressButton}
          undelayColor="blue"
        >
          <View>
            <Text style={styles.insideButton}>
              This is TouchableWithoutFeedback
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  insideButton: {
    margin: 20,
    justifyContent: 'center'
  }
});

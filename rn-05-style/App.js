import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Text style={styles.redColor}>This is a styled text - red</Text>
                <Text style={styles.greenColor}>
                    This is styled text - green
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redColor: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    greenColor: {
        color: 'green',
        fontSize: 30
    }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <StatusBar hidden={true} />
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'chartreuse'
                        }}
                    />
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            backgroundColor: 'chocolate'
                        }}
                    />
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'coral'
                        }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <StatusBar hidden={true} />
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'chartreuse'
                        }}
                    />
                    <View
                        style={{
                            flex: 2,
                            backgroundColor: 'chocolate'
                        }}
                    />
                    <View
                        style={{
                            flex: 4,
                            backgroundColor: 'coral'
                        }}
                    />
                </View>
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
    }
});

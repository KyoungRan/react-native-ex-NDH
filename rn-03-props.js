import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

const ContentComponent = ({ content }) => {
    return (
        <Text>
            This is {content}
        </Text>
    );
};

export default class App extends Component {
    render() {
        let myImage = {
            uri:
                'http://images.natureworldnews.com/data/images/full/20983/kunbarrasaurus-ieversi.jpg'
        };
        let size = { width: 190, height: 190 };
        return (
            <View style={styles.container}>
                <Text>props in React Native</Text>
                <Image source={myImage} style={size} />
                <ContentComponent content="Triceratops skeleton" />
            </View>
        );
    }
}

AppRegistry.registerComponent('This is a dinosour', () => DinosaurComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

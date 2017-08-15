import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShownText: true };

        setInterval(() => {
            this.setState(previousState => {
                return { isShownText: !previousState.isShownText };
            });
        }, 500);
    }

    render() {
        let textToDisplay = this.state.isShownText
            ? this.props.textContent
            : '';
        return (
            <Text>
                {textToDisplay}
            </Text>
        );
    }
}

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Blink textContent={`Hello, I am Kyoungran`} />
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

export default App;

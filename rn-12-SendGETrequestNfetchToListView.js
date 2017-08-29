import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class MoviesComponent extends Component {
  state = {
    clonedMovies: []
  };

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.josn())
      .then(responseJson => {
        let standardDataSource = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        rhis.setState({
          clonedMovies: standardDataSource.cloneWithRows(responseJson.movies)
        });
      });
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <ListView
          dataSource={clonedMovies}
          renderRow={rowData =>
            <Text>
              Title: {rowData.title}, release year: {rowData.releaseYear}
            </Text>}
        />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Welcome } from './Welcome';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameInput: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 2,
  }
});

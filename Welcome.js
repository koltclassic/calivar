import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Text, TextInput, StyleSheet, View } from 'react-native';

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'bob' };
  }

  handlePress = () => {
    Alert.alert('player name is ' + this.state.text)
  }

  render() {
    
    let userGreeting = null;
    let enterButton = null;
    let pattern = new RegExp("^[a-zA-Z0-9_.-]*$");

    if (this.state.text.replace(/ /g,'').length > 2 && pattern.test(this.state.text) ){
        userGreeting = <Text>Welcome, {this.state.text}!</Text>,
        enterButton = <Button title="Begin" onPress = { this.handlePress }></Button>
    } else {
        userGreeting = <Text>Please enter a name</Text>;
    }


    return (

        <View style={styles.welcome}>
            <Text style={{fontSize: 24}}>Welcome to Calivar!</Text>
            <TextInput
                style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 2, textAlign: 'center'}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            {userGreeting}
            {enterButton}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    welcome: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
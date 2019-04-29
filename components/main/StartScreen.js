/**
 * User enters a course code and presses a button to proceed
 *
 * @format
 * @flow
 */

import {Button, StyleSheet, Text, View, TextInput} from "react-native";
import React, {Component} from 'react';

class StartScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          codeEntry: ''
      };

      this.updateEntry = this.updateEntry.bind(this);
  }

  updateEntry(entry) {
      const codeFormat = RegExp('[A-Za-z]{'+ entry.length + '}');
      if (codeFormat.test(entry)) {
          this.setState({
              codeEntry: entry.toUpperCase()
          });
      }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text> Enter a course code (ex: 'CPSC') </Text>
            <TextInput
            style = {styles.codeBox}
            onChangeText = { this.updateEntry }
            value = {this.state.codeEntry}
            maxLength = {4}
            />
          <Button
              title="Find Courses"
              onPress={() => navigate('Code', {code: this.state.codeEntry})}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  codeBox: {
      height: 40,
      width: 72,
      borderColor: 'gray',
      borderWidth: 1,
      fontSize: 24,
  }
});

export default StartScreen

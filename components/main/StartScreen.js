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
          <Text style={styles.instruction}> Enter a course code (ex: 'CPSC') </Text>
            <TextInput
            style = {styles.codeBox}
            onChangeText = { this.updateEntry }
            value = {this.state.codeEntry}
            maxLength = {4}
            />
          <Button
              style={styles.findButton}
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
        backgroundColor: '#053E77',
    },
    instruction: {
        color: 'white',
        paddingBottom: 20
    },
    codeBox: {
        height: 40,
        width: 70,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        fontSize: 24,
    },
    findButton: {
        color: 'white',
    }
});

export default StartScreen

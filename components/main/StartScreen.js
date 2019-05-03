/**
 * User enters a course code and presses a button to proceed
 *
 * @format
 * @flow
 */

import {Button, StyleSheet, Text, View, TextInput} from "react-native";
import React, {Component} from 'react';
import {VerticalPadding} from '../Utils'

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
            <View style={{
                height: 1,
                width: 150,
                backgroundColor: '#d9d9d9'
            }}/>
            {VerticalPadding(100)}
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
    },
    instruction: {
        color: 'black',
        paddingBottom: 20
    },
    codeBox: {
        height: 100,
        width: 300  ,
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 0,
        fontSize: 60,
        textAlign: 'center',
        color: 'black'
    },
});

export default StartScreen

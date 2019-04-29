/**
 * Displays a list of courses given a course code
 *
 * @format
 * @flow
 */

import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import CourseList from './CourseList'

class CodeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: props.navigation.getParam('code'),
            isLoaded: false,
            error: null,
            info: null,
            courses: []
        }

        this.itemizeCourses = this.itemizeCourses.bind(this);
    }

    itemizeCourses(courseList) {
        let items = []
        for (let i = 0; i < courseList.length; i++) {
            const number = courseList[i]
            items[items.length] = {key: i.toString(), courseNo: number}
        }
        return items;
    }

    componentDidMount() {

        // load the stuff
        fetch('https://ubc-courses-api.herokuapp.com/2018W/' + this.state.code)
            .then((response) => response.json())
            .then((json) => {
                if (json) { // check for nonexistent object (i.e. invalid course code)
                    this.setState({
                        info: json,
                        courses: this.itemizeCourses(json.courses),
                        isLoaded: true
                    });
                } else {
                    this.setState({
                        error: 'invalid code',
                        isLoaded: false
                    })
                }
            })
            .catch((error) => {
                this.setState( {error: error});
            });
    }

    render() {
        console.log(this.state.courses);
      return (
          <View>
              {(this.state.isLoaded && !this.state.error) ?
                  <View>
                    <View style = {styles.infoHeader}>
                        <Text style={{fontSize: 32}}> {this.state.info.title} </Text>
                        <Text style={styles.infoFaculty}> {this.state.info.faculty} </Text>
                   </View>
                   <CourseList
                        code={this.state.code}
                        data={this.state.courses}
                   />
                  </View> :
                  <View style={styles.message}>
                    {this.state.error ?
                        <View style={styles.error}>
                            <Text> An Error Occurred </Text>
                        </View> :
                        <Text> loading </Text>
                    }
                </View>
              }
          </View>
      );
    }
}

const styles = StyleSheet.create({
    infoHeader: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#57C2D8',
    },
    infoFaculty: {
        color: 'white',
        fontSize: 16
    },
    message: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    error: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E14F29'
    }
});

export default CodeScreen

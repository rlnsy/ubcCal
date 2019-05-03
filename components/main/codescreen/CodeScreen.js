/**
 * Displays a list of courses given a course code
 *
 * @format
 * @flow
 */

import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import CourseList from './CourseList';
import {renderStatusScreen} from '../StatusScreen';

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
      return (
          <View>
              {(this.state.isLoaded && !this.state.error) ?
                  <View>
                    <View style ={styles.infoHeader}>
                        <Text style={{fontSize: 24}}> {this.state.info.title} </Text>
                        <Text style={styles.infoFaculty}> {this.state.info.faculty} </Text>
                   </View>
                  <View style={{height: 1, backgroundColor: '#d9d9d9'}} />
                   <CourseList
                        navigation={this.props.navigation}
                        code={this.state.code}
                        data={this.state.courses}
                   />
                  </View> : renderStatusScreen(this.state.error)
              }
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#053E77',
    },
    infoHeader: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoFaculty: {
        paddingTop: 5,
        color: 'black',
        fontSize: 16
    }
});

export default CodeScreen;

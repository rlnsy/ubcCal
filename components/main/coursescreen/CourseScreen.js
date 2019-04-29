import React, {Component} from 'react'
import {StyleSheet, Text, View} from "react-native";

class CourseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseCode: props.navigation.getParam('code'),
            courseNo: props.navigation.getParam('number'),
            isLoaded: false,
            error: null,
            name: null,
            title: null,
            link: null,
            sections: [],
        };
    }

    componentDidMount() {
        const url = 'https://ubc-courses-api.herokuapp.com/2018W/'
            + this.state.courseCode + '/' + this.state.courseNo; // example .../CPSC/310
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    name: json.course_name,
                    title: json.course_title,
                    link: json.course_link,
                    sections: json.sections,
                    isLoaded: true
                });
            })
            .catch((error) => {
                this.setState( {error: error});
                console.log(error);
            });
    }

    render() {
        return (
          <View style={styles.container}>
              {(this.state.isLoaded && !this.state.error) ?
                  <View>
                    <Text> {this.state.name} </Text>
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
    container: {
        backgroundColor: '#053E77',
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

export default CourseScreen

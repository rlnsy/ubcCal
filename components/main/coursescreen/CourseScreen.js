import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from "react-native";
import {renderStatusScreen} from "../StatusScreen";
import {saveCourse} from "../../coursesaver/CourseSaver";
import {Divider, VerticalPadding} from "../../utils";

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

        this.save = this.save.bind(this);
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

    save() {
        saveCourse(this.state.courseCode, this.state.courseNo);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
          <View>
              {(this.state.isLoaded && !this.state.error) ?
                  <View>
                      <View style={styles.header}>
                          <Text style={{fontSize: 24, textAlign: 'center'}}>
                              {this.state.name} : {this.state.title}
                          </Text>
                      </View>
                      {Divider()}
                      <Button
                          title={"Save Course"}
                          onPress={this.save}
                      />
                      {VerticalPadding(50)}
                      <Button
                          title="View on SSC"
                          onPress={() => navigate('CourseWeb', {link: this.state.link})}
                      />
                  </View> : renderStatusScreen(this.state.error)
              }
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
    header: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CourseScreen

import React, {Component} from 'react';
import CourseList, {itemize} from '../main/courselist/CourseList';
import {getCourses} from './CourseSaver'
import {Text, View} from "react-native";
import {renderStatusScreen} from "../main/StatusScreen";

const EMPTY_COURSE_LIST = 'no courses to display';

export default class SavedCoursesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            courses: null
        };
    }

    componentDidMount() {
        getCourses().then(
            (result) => {
                if (result == null) {
                    this.setState({
                        isLoaded: true,
                        error: EMPTY_COURSE_LIST,
                        courses: [],
                    });
                    console.log('empty course list loaded')
                } else {
                    this.setState({
                        isLoaded: true,
                        courses: itemize(JSON.parse(result))
                    });
                    console.log('loaded courses');
                    console.log(this.state.courses);
                }
            }
        ).catch((error) => {
            console.log(error);
            this.setState({
                error: error
            });
        });
    }

    render() {
        return (
          <View>
              {(this.state.isLoaded && !this.state.error) ?
                  <CourseList
                      navigation={this.props.navigation}
                      data={this.state.courses}
                  /> :
                  (this.state.error === EMPTY_COURSE_LIST) ?
                      <Text> No courses yet. Go add some! </Text> :
                      renderStatusScreen(this.state.error)
              }
          </View>
      );
    }
}
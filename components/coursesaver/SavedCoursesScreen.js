import React, {Component} from 'react';
import SavedList from './SavedList';
import {getCourses} from './CourseSaver'
import {Text, View} from "react-native";
import {renderStatusScreen} from "../main/StatusScreen";

export default class SavedCoursesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            courses: null,
            isEmpty: true,
        };
        this.handleModify = this.handleModify.bind(this);
    }

    componentDidMount() {
        getCourses().then(
            (result) => {
                if (result == null) {
                    this.setState({
                        isLoaded: true,
                        courses: [],
                    });
                    console.log('empty course list loaded')
                } else {
                    console.log('loaded courses');
                    const list = JSON.parse(result);
                    this.setState({
                        isLoaded: true,
                        courses: list,
                        isEmpty: (list.length === 0)
                    });
                }
            }
        ).catch((error) => {
            console.log(error);
            this.setState({
                error: error
            });
        });
    }

    handleModify() {
        this.componentDidMount();   // refresh
    }

    render() {
        return (
          <View>
              {(this.state.isLoaded && !this.state.error && !this.state.isEmpty) ?
                  <SavedList
                      navigation={this.props.navigation}
                      data={this.state.courses}
                      onModify={this.handleModify}
                  /> :
                  this.state.isEmpty ?
                      <Text> No courses yet. Go add some! </Text> :
                      renderStatusScreen(this.state.error)
              }
          </View>
      );
    }
}
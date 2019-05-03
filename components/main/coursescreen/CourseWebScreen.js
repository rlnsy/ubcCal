import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class CourseWebScreen extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://courses.students.ubc.ca'
                        + this.props.navigation.getParam('link')}}
                style={{marginTop: 20}}
            />
        )
    }
}

export default CourseWebScreen;

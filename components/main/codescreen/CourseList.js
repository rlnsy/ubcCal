import React, {Component} from 'react'
import {FlatList} from 'react-native';
import CourseListItem from './CourseListItem'

class CourseList extends Component {

    _onPressItem = (id) => {
        const selectedItem = this.props.data[id];
        const number = selectedItem.courseNo;
        const {navigate} = this.props.navigation;
        navigate('Course', {code: this.props.code, number: number});
    };

    _renderItem = ({item}) => (
        <CourseListItem
            id={item.key}
            onPressItem={this._onPressItem}
            courseNo={item.courseNo}
            code={this.props.code}
        />
    );

    render() {
        return (
          <FlatList
            data={this.props.data}
            renderItem={this._renderItem}
          />
        );
    }
}

export default CourseList

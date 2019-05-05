/**
 * A List of Courses
 */

import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CourseListItem from './CourseListItem';

export function itemize(list) {
    let items = [];
    for (let i = 0; i < list.length; i++) {
        items[items.length] = {key: i.toString(), object: list[i]};
    }
    console.log(items);
    return items;
}

class CourseList extends Component {

    _onPressItem = (id) => {
        const selectedItem = this.props.data[id].object;
        const {navigate} = this.props.navigation;
        navigate('Course', {
            code: selectedItem.code,
            number: selectedItem.number}
            );
    };

    _renderItem = ({item}) => (
        <CourseListItem
            id={item.key}
            onPressItem={this._onPressItem}
            courseNo={item.object.number}
            code={item.object.code}
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

export default CourseList;

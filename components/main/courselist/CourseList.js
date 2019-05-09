/**
 * A List of Courses
 */

import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CourseListItem from './CourseListItem';

function itemize(list) {
    let items = [];
    for (let i = 0; i < list.length; i++) {
        items[items.length] = {key: i.toString(), object: list[i]};
    }
    console.log(items);
    return items;
}

class CourseList extends Component {

    constructor(props) {
        super(props)
        this.renderItem = this.renderItem.bind(this);
    }

    _onPressItem = (id) => {
        const selectedItem = this.props.data[id];
        const {navigate} = this.props.navigation;
        navigate('Course', {
            code: selectedItem.code,
            number: selectedItem.number}
            );
    };

    renderItem(item) {
        return (
            <CourseListItem
                id={item.key}
                onPressItem={this._onPressItem}
                courseNo={item.object.number}
                code={item.object.code}
            />
        )
    }

    _renderItem = ({item}) => (
        this.renderItem(item)
    );

    render() {
        return (
          <FlatList
            data={itemize(this.props.data)}
            renderItem={this._renderItem}
          />
        );
    }
}

export default CourseList;

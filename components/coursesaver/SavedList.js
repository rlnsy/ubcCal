import CourseList from '../main/courselist/CourseList';
import React from "react";
import {View, StyleSheet} from "react-native";
import RemoveButton from './RemoveButton'

export default class SavedList extends CourseList {

    _renderItem = ({item}) => (
        <View style={styles.listItem}>
            {super.renderItem(item)}
            <RemoveButton
                idx={item.key}
                onRemove={this.props.onModify}
            />
        </View>
    );

}

styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row'
    },
});

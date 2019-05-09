import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {removeCourse} from './CourseSaver'

export default class RemoveButton extends Component {

    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        const itemKey = this.props.idx;
        console.log('removing key ' + itemKey);
        removeCourse(itemKey).then( () => {
            let callback = this.props.onRemove;
            callback();
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.delete}>
                    <Text> Remove </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
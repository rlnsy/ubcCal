import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

class CourseListItem extends Component {

    _onPress = () => {
        this.props.onPressItem(this.props.id)
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.itemBlock}>
                    <Text style={styles.itemText}> {this.props.code} {this.props.courseNo} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    itemBlock: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#053E77'
    },
    itemText: {
        color: 'white',
        fontSize: 24,
    }
});

export default CourseListItem

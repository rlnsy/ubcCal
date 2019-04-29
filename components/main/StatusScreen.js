import {Text, View, StyleSheet} from "react-native";
import React from 'react';

export function renderStatusScreen(error) {

    // if there's an error, display it. Otherwise indicate loading

    return (
        <View style={styles.message}>
            {error ?
                <View style={styles.error}>
                    <Text> An Error Occurred </Text>
                </View> :
                <Text> loading </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    error: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E14F29'
    }
})

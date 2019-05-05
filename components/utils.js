import React from 'react';
import {View} from "react-native";

export function VerticalPadding(height) {
    return ( <View style={{
            height: height,
            backgroundColor: 'rgba(52, 52, 52, 1.0)'
        }}/>
    );
}

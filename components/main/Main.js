/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import CodeScreen from './codescreen/CodeScreen'
import StartScreen from './StartScreen'

const MainNavigator = createStackNavigator({
  Start: {screen: StartScreen},
  Code: {screen: CodeScreen},
});

const Main  = createAppContainer(MainNavigator);

export default Main



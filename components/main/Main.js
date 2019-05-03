/**
 * Primary App View
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import CodeScreen from './codescreen/CodeScreen';
import CourseScreen from './coursescreen/CourseScreen';
import CourseWebScreen from './coursescreen/CourseWebScreen';
import StartScreen from './StartScreen';

const MainNavigator = createStackNavigator({
  Start: {screen: StartScreen},
  Code: {screen: CodeScreen},
  Course: {screen: CourseScreen},
  CourseWeb: {screen: CourseWebScreen}
});

const Main  = createAppContainer(MainNavigator);

export default Main;

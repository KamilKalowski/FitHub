import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Block, Text} from 'expo-ui-kit';
import { NavigationContainer } from '@react-navigation/native';
import {Asset} from 'expo';

import Drawer from './Drawer';
import Navigation from './Navigation';
import Login from './app/screens/Login';
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants",
]);

export default function App() {
  return (
    <NavigationContainer>
            <Drawer/>
    </NavigationContainer>
      //<Login/>
  );
}

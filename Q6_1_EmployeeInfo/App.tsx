/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { StatusBar, useColorScheme, View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import EmployeeForm from './screens/EmployeeForm';
import SumFirstLast from './screens/SumFirstLast';
import MinOfThree from './screens/MinOfThree';
import Hailstone from './screens/Hailstone';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Vo Thi Tra My - 1931200017" }}
        />
        <Stack.Screen
          name="EmployeeForm"
          component={EmployeeForm}
          options={{ title: "Employee Information" }}
        />
        <Stack.Screen
          name="SumFirstLast"
          component={SumFirstLast}
          options={{ title: "Sum of First and Last Digit" }}
        />
        <Stack.Screen
          name="MinOfThree"
          component={MinOfThree}
          options={{ title: "Minimum of 3 Numbers" }}
        />
        <Stack.Screen
          name="Hailstone"
          component={Hailstone}
          options={{ title: "Hailstone Sequence" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;

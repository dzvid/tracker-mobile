import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/**
 * ---NOT Authenticated screens---
 * SignUp
 * SignIn
 *
 * -----Authenticated screens-----
 * TrackList
 * TrackDetail
 * TrackCreate
 * Account
 *
 */

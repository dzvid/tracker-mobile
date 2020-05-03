import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { navigationRef, isMountedRef } from './src/RootNavigation';

import {
  Context as AuthContext,
  Provider as AuthProvider,
} from './src/context/AuthContext';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const TrackListStack = createStackNavigator();

const TrackListScreens = () => {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
};

const AppTab = createBottomTabNavigator();

const AppTabScreen = () => {
  return (
    <AppTab.Navigator>
      <AppTab.Screen name="TrackListScreens" component={TrackListScreens} />
      <AppTab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <AppTab.Screen name="Account" component={AccountScreen} />
    </AppTab.Navigator>
  );
};

const App = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {state.token === null ? <AuthStackScreen /> : <AppTabScreen />}
    </NavigationContainer>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

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

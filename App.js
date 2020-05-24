import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import LoadingScreen from './src/screens/LoadingScreen';

import { navigationRef, isMountedRef } from './src/RootNavigation';

import {
  Context as AuthContext,
  Provider as AuthProvider,
} from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

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
      <TrackListStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: 'Tracks',
        }}
      />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
};

const AppTab = createBottomTabNavigator();

const AppTabScreen = () => {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TrackListScreens') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'TrackCreate') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          } else if (route.name === 'Account') {
            iconName = 'ios-settings';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <AppTab.Screen
        name="TrackListScreens"
        component={TrackListScreens}
        options={{
          title: 'Tracks',
        }}
      />
      <AppTab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          title: 'New track',
        }}
      />
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

  if (state.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {state.token === null ? <AuthStackScreen /> : <AppTabScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => (
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
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

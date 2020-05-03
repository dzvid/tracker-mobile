import { AsyncStorage } from 'react-native';

import * as RootNavigation from '../RootNavigation';

import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const authReducer = (state, action) => {
  switch (action.type) {
    case '@auth/ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case '@auth/SIGNIN':
      return { ...state, token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      await trackerApi.post('/signup', {
        email,
        password,
      });

      RootNavigation.navigate('SignIn');
    } catch (error) {
      dispatch({
        type: '@auth/ADD_ERROR',
        payload: 'Something went wrong with sign up!',
      });
    }
  };
};

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    // make a api request with login
    // handle success by updating state
    // if signin fails, we show a error message
    try {
      const response = await trackerApi.post('/signin', {
        email,
        password,
      });

      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: '@auth/SIGNIN', payload: response.data.token });
    } catch (error) {
      dispatch({
        type: '@auth/ADD_ERROR',
        payload: 'Something went wrong with sign in!',
      });
    }
  };
};

const signOut = (dispatch) => {
  return () => {
    // somehow signOut
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, errorMessage: '' }
);

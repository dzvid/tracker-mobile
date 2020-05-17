import { AsyncStorage } from 'react-native';

import * as RootNavigation from '../RootNavigation';

import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const authReducer = (state, action) => {
  // state === { token: null || string, errorMessage: string, isLoading: boolean }
  switch (action.type) {
    case '@auth/ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case '@auth/CLEAR_ERROR_MESSAGE':
      return { ...state, errorMessage: '' };
    case '@auth/SIGN_IN':
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        errorMessage: '',
      };
    case '@auth/NO_TOKEN':
      return { ...state, isLoading: false };
    case '@auth/SIGN_OUT':
      return { ...state, token: null, errorMessage: '', isLoading: false };

    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({ type: '@auth/SIGN_IN', payload: token });
    } else {
      dispatch({ type: '@auth/NO_TOKEN' });
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: '@auth/CLEAR_ERROR_MESSAGE' });
  };
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
      dispatch({ type: '@auth/SIGN_IN', payload: response.data.token });
    } catch (error) {
      dispatch({
        type: '@auth/ADD_ERROR',
        payload: 'Something went wrong with sign in!',
      });
    }
  };
};

const signOut = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: '@auth/SIGN_OUT' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '', isLoading: true }
);

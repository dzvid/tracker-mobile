import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';

function SignUpScreen() {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />

      <NavLink
        linkText="Already have an account? Sign in instead"
        routeName="SignIn"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
});

export default SignUpScreen;

import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';

function SignInScreen() {
  const { state, signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signIn}
      />

      <NavLink
        linkText="Do not have an account? Sign up now"
        routeName="SignUp"
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

export default SignInScreen;

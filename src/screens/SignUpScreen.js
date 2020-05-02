import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;

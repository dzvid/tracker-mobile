import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
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

export default SignInScreen;

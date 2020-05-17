import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';

import Spacer from '../components/Spacer';

function AccountScreen() {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Spacer>
        <Text style={{ fontSize: 28 }}>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;

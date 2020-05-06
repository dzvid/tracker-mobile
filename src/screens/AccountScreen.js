import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';

import Spacer from '../components/Spacer';

function AccountScreen() {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Text>Log Out</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;

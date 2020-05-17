import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Spacer from './Spacer';

function NavLink({ linkText, routeName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.linkText}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkText: {
    color: 'blue',
  },
});

export default NavLink;

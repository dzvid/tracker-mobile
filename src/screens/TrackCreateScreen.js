import '../_mockLocation';

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import Map from '../components/Map';

function TrackCreateScreen({ isFocused }) {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />

      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

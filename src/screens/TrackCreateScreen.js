import '../_mockLocation';

import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

function TrackCreateScreen({ navigation, isFocused }) {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

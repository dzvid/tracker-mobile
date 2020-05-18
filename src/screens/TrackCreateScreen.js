import '../_mockLocation';

import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

import { Context as LocationContext } from '../context/LocationContext';

import Map from '../components/Map';

function TrackCreateScreen() {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(false);

  const startWatching = async () => {
    // To reset permissions:  adb shell pm reset-permissions
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      setErr(true);
    } else {
      setErr(false);

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />

      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;

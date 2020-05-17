import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import Map from '../components/Map';
import Spacer from '../components/Spacer';

function TrackCreateScreen() {
  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>

      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;

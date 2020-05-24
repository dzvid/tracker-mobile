import React, { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

function TrackDetailScreen({ navigation, route }) {
  const { state } = useContext(TrackContext);
  const { _id } = route.params;

  const track = state.find((trackInList) => trackInList._id === _id);

  if (!track || !track.locations[0]) {
    return <Text>There are no location points registered for this track!</Text>;
  }

  const initialCoords = track.locations[0].coords;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: track.name === '' ? 'Track' : `Track: ${track.name}`,
    });
  }, [navigation, track.name]);

  return (
    <>
      <Text style={{ fontSize: 32 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;

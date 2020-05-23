import React, { useContext, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

import { Context as TrackContext } from '../context/TrackContext';

function TrackListScreen({ navigation }) {
  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchTracks);

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', { _id: item._id });
              }}
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});

export default TrackListScreen;

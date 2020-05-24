import { useContext } from 'react';

import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';

import * as RootNavigation from '../RootNavigation';

/**
 * Sends a request containing the current track (name + locations) stored in
 * LocationContext to be persisted in the server.
 */
export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    resetLocationsCurrentTrack,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    resetLocationsCurrentTrack();
    RootNavigation.navigate('TrackList');
  };

  return [saveTrack];
};

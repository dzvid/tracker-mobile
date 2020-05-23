// All about saving + retrieving existing tracks from our API
import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return () => {};
};

const createTrack = (dispatch) => {
  return async (name, locations) => {
    // TODO: Check for errors when request fails
    await trackerApi.post('/tracks', { name, locations });
  };
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);

// All about saving + retrieving existing tracks from our API
import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const trackReducer = (state, action) => {
  switch (action.type) {
    case '@track/FETCH_TRACKS':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: '@track/FETCH_TRACKS', payload: response.data });
  };
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

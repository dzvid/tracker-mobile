// All about tracking the users location + storing points
import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case '@location/ADD_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload };
    case '@location/ADD_LOCATION':
      return { ...state, locations: [...state.locations, action.payload] };
    case '@location/CHANGE_TRACK_NAME':
      return { ...state, name: action.payload };
    case '@location/START_RECORDING':
      return { ...state, recording: true };
    case '@location/STOP_RECORDING':
      return { ...state, recording: false };
    case '@location/RESET_LOCATIONS_CURRENT_TRACK':
      return { ...state, name: '', locations: [] };
    default:
      return state;
  }
};

const changeTrackName = (dispatch) => {
  return (name) => {
    dispatch({ type: '@location/CHANGE_TRACK_NAME', payload: name });
  };
};

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: '@location/START_RECORDING' });
  };
};

const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: '@location/STOP_RECORDING' });
  };
};

const addLocation = (dispatch) => {
  return (location, recording) => {
    dispatch({ type: '@location/ADD_CURRENT_LOCATION', payload: location });

    if (recording) {
      dispatch({ type: '@location/ADD_LOCATION', payload: location });
    }
  };
};

const resetLocationsCurrentTrack = (dispatch) => {
  return () => {
    dispatch({ type: '@location/RESET_LOCATIONS_CURRENT_TRACK' });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeTrackName,
    resetLocationsCurrentTrack,
  },
  { name: '', recording: false, locations: [], currentLocation: null }
);

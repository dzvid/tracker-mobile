import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case '@location/ADD_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => {
  return () => {};
};

const stopRecording = (dispatch) => {
  return () => {};
};

const addLocation = (dispatch) => {
  console.log('Hi there!');
  return (location) => {
    dispatch({ type: '@location/ADD_CURRENT_LOCATION', payload: location });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);

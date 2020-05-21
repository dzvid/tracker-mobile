import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import Spacer from './Spacer';

function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeTrackName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter track name"
          onChangeText={changeTrackName}
        />
        {recording ? (
          <Button
            title="Stop recording"
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: '#F00' }}
          />
        ) : (
          <Button title="Start recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
}

export default TrackForm;

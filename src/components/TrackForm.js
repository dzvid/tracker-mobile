import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

import Spacer from './Spacer';

function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeTrackName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

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
      <Spacer>
        {!recording && locations.length ? (
          <Button
            title="Save recording"
            buttonStyle={{ backgroundColor: '#0F0' }}
            onPress={saveTrack}
          />
        ) : null}
      </Spacer>
    </>
  );
}

export default TrackForm;

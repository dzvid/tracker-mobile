import React from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from './Spacer';

function TrackForm() {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter track name" />
        <Button title="Start recording" />
      </Spacer>
    </>
  );
}

export default TrackForm;

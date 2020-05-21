import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

/**
 * Accepts a callback to be executed everytime the user location is updated.
 * Returns a err, when the user does not allow permission to access the user location.
 */
export default (shouldTrack, callback) => {
  const [err, setErr] = useState(false);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    // To reset permissions:  adb shell pm reset-permissions
    const { status } = await requestPermissionsAsync();

    if (status !== 'granted') {
      setErr(true);
    } else {
      setErr(false);

      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );

      setSubscriber(sub);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
        setSubscriber(null);
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

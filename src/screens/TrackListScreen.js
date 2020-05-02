import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import { Container } from './styles';

function TrackListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>

      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrackListScreen;

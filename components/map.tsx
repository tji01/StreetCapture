import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function GetMap(props: any) {
    let latitude = props.latitude;
    let longitude = props.longitude;

  return (
    <View style={styles.container}>
        <MapView 
            style={styles.map} 
            showsUserLocation = {true}
            scrollEnabled = {false}
            zoomEnabled = {false}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }}
            followsUserLocation = {true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
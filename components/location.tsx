import * as api from '@/database_api/api-calls.js';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export default function GetLocation({getData}: {getData: any}) {
  const handleLocationData = (data: string) =>
  {
    getData(data);
  }

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    var jsontext = JSON.stringify(location);
    var loc_obj = JSON.parse(jsontext);
    var date = new Date(loc_obj.timestamp);
    /*text = "LAT: " + loc_obj.coords.latitude + 
    "\n LONG: " + loc_obj.coords.longitude + 
    "\nTIME: " + date.toDateString() + " " + date.toLocaleTimeString();*/
    text = ""
    api.sendLocationToDatabase(loc_obj.coords.latitude, loc_obj.coords.longitude);
    handleLocationData(jsontext); 
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.paragraph}>{text}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});

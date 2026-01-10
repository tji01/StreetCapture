
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Image } from 'expo-image';

import GetLocation from '@/components/location';
import GetMap from '@/components/map';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CaptureSetting } from '@/components/ui/capture-setting';




export default function HomeScreen() {

  const [visibility, setVisibility] = useState(false);
  const [enableMap, setEnableMap] = useState(false);
  const [locationData, setLocationData] = useState<string>("");

  const parseForLat = () =>
  {
    let locObj = JSON.parse(locationData);
    return locObj.coords.latitude;
  }

  const parseForLong = () =>
  {
    let locObj = JSON.parse(locationData);
    return locObj.coords.longitude;
  }

  const handleSetLocData = (data: string) =>
  {
    setLocationData(data);
  }

  return (

    

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Capture Settings</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>

        <CaptureSetting
          title= "Visibility"
          trueText='Visible'
          falseText='Invisible'
          setToggle={setVisibility}
          toggle={visibility}
        
        />

        
        <ThemedView>
          {visibility ? 
            <View>
              
              <ThemedText>
                <GetLocation
                getData={handleSetLocData}
                />
              </ThemedText>

            
              {enableMap ? 
              <ThemedView style={styles.mapContainer}>
                <GetMap
                  latitude = {parseForLat()}
                  longitude = {parseForLong()} 
                /> 

              </ThemedView>
              :

              <CaptureSetting
                title= "Map"
                toggle= {enableMap}
                setToggle = {setEnableMap}
                trueText = ""
                falseText = 'Map Off'
              />}
            </View>
          : 
            <ThemedText>
              Enable Visibility
            </ThemedText>}
        </ThemedView>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  mapContainer: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "red",
    padding: 10,

  },
});

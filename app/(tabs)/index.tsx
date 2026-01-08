import { Image } from 'expo-image';
import { Platform, StyleSheet, Switch } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CaptureSetting } from '@/components/ui/capture-setting';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {

  const [allowCaptures, setAllowCaptures] = useState(false);
  const [captureOthers, setCaptureOthers] = useState(false);
  const [someoneFound, setSomeoneFound] = useState(false);

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
        />

        <CaptureSetting
          title= "Listen for Others"
          trueText='Listening'
          falseText='Not Listening'
        />

        

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
});

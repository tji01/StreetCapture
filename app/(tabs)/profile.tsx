
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Profile() {

    //information recieved from explore page (capture component) user profile request
    const {user, message} = useLocalSearchParams();
    
  
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
          <ThemedText type="title">{user}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>

          <ThemedText>
              {message}
          </ThemedText>

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

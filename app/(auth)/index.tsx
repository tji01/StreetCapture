
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';


export default function HomeScreen() {

    const [userText, setUserText] = useState("");
    const [passText, setPassText] = useState("");

    const router = useRouter();
  
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
            <ThemedText type="title">Welcome</ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>

            
          <TextInput style={styles.text}
            onChangeText={setUserText}
          >

          </TextInput>

          <ThemedText>
            {userText}
          </ThemedText>

          <TextInput style={styles.text}
            onChangeText={setPassText}
          >

          </TextInput>
          
          <ThemedText>
            {passText}
          </ThemedText>

          <TouchableOpacity
          
          onPress={() => {router.replace("/(tabs)/home")}}
          >
            <ThemedText>
              To App 
            </ThemedText>
          </TouchableOpacity>
        
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

  text: {

    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 3,
    color: 'white',
    height: 50,
    fontSize: 30,
    padding: 5,
    

  },
});

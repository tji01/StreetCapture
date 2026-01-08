import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle } from '@react-navigation/elements';
import { Capture } from '@/components/ui/capture';

export default function TabTwoScreen() {
  return (
    <ThemedView style= {styles.main}>
      <SafeAreaView>
        <ThemedView>
          <ThemedText 
          type="title"
          >
            View Captures
          </ThemedText>
        </ThemedView>


        <ScrollView style = {styles.scrollContainer}>
          <Capture
            username='tyler'
            time='now'
            message='test'
          />
          <Capture
            username='tyler'
            time='now'
            message='test'
          />
          <Capture
            username='tyler'
            time='now'
            message='test'
          />
          <Capture
            username='tyler'
            time='now'
            message='test'
          />
          <Capture
            username='tyler'
            time='now'
            message='test'
          />
          <Capture
            username='tyler'
            time='now'
            message='test'
          />
          
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  main: {
    height: '100%',
  },
  scrollContainer: {
    height: '100%'
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

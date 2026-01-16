import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Capture } from '@/components/ui/capture';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          {/* The components and information for each will be generated in a loop on recieving data
          from the getCaptures API call (which returns a list of uid's). For each, the getUserInfo API 
          call will be made to fetch the information */}
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

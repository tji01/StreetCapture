import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

export function Capture({children, username, time, message}: PropsWithChildren & { username: string, time: string, message: string }) {

    const [toggle, setToggle] = useState(false);

     const router = useRouter();

    return(
        <View>
            <TouchableOpacity
                onPress={() => (router.push({
                    pathname: "/profile",
                    params: {
                        user: username,
                        message: message 
                    }
                }))}
            >
                <ThemedView style = {styles.container}>
                    <ThemedText style = {styles.containerText}>
                        {username}
                    </ThemedText>

                    <ThemedText style = {styles.containerText}>
                        {time}
                    </ThemedText>

                    <ThemedText style = {styles.containerText}>
                        {message}
                    </ThemedText>
                </ThemedView>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth:3,
    borderRadius:10,
    borderColor: 'black',
    padding:4,
    height:50,
    marginBottom: 10,
  },

  containerText: {
    flex: 1,
    position: 'relative',
    top: 3
  },

});


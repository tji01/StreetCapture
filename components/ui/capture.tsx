import { PropsWithChildren, useState} from 'react';
import {StyleSheet, TouchableOpacity, Switch, View, Alert} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export function Capture({children, username, time, message}: PropsWithChildren & { username: string, time: string, message: string }) {

    const [toggle, setToggle] = useState(false);


    return(
        <View>
            <TouchableOpacity
                onPress={() => (Alert.alert("you pressed a button"))}
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


import { StyleSheet, Switch } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export function CaptureSetting(props: { title: string; toggle: boolean; setToggle: any; trueText: string; falseText: string; }) {
  const title = props.title;
  const toggle = props.toggle;
  const setToggle = props.setToggle;
  const trueText = props.trueText;
  const falseText = props.falseText;

    return(
            <ThemedView>
                <ThemedText type='defaultSemiBold' style={styles.titleText}>
                    {title}
                </ThemedText>
                <ThemedView style={styles.container}>
                    <Switch style={styles.containerSwitch}
                        value={toggle}
                        onValueChange={setToggle} />

                    <ThemedText style={styles.containerText}>
                        {toggle ? trueText : falseText}
                    </ThemedText>
                </ThemedView>
            </ThemedView>

    )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth:0,
    borderRadius:10,
    borderColor: 'black',
    padding:4,
  },

  containerText: {
    flex: 1,
    position: 'relative',
    top: 3
  },

  containerSwitch: {
    flex: 1
  },

  titleText: {
    margin: 10
  }
});


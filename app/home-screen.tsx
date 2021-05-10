import React from 'react'
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Page from 'app/page'

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000' }]}>
       {title}
      </Text>
      <Text
        style={[styles.sectionDescription, { color: isDarkMode ? '#ccc' : '#333' }]}>
        {children}
      </Text>
    </View>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <Page>
      <Section title="Hello world">
        Edit <Text style={styles.highlight}>App.js</Text> to change this
        screen and then come back to see your edits.
      </Section>
    </Page>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 30,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
})

export default HomeScreen

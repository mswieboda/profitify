import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

const Stack = createStackNavigator();

const Section: React.FC<{ title: string }> = ({children, title}) => {
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

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = { backgroundColor: isDarkMode ? '#111' : '#eee' }

  return (
    <SafeAreaView style={[{flex: 1, }, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{ backgroundColor: isDarkMode ? '#000' : '#fff' }}
      >
        <Section title="Hello world">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
      </View>
    </SafeAreaView>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App

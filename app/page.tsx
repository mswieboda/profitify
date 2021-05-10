import React from 'react'
import {
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Page = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = { backgroundColor: isDarkMode ? '#111' : '#eee' }

  return (
    <SafeAreaView style={[{flex: 1, }, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Page

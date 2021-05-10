import React from 'react'
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'
import PercentLabel from 'app/percent-label'
import DollarLabel from 'app/dollar-label'

export default ({ percent = 0.5, dollars = 0.1305 }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = StyleSheet.create({
    text: {
      fontSize: 50
    }
  })

  return (
    <View>
      <PercentLabel value={percent} style={styles.text} />
      <DollarLabel value={dollars} style={styles.text} />
    </View>
  )
}

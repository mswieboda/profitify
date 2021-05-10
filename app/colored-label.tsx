import React from 'react'
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native'
import _ from 'lodash'

export default ({ value, formatter, prefix = '', alwaysShowSign = false, style }) => {
  let formatted = prefix + (_.isNumber(value) ? formatter(Math.abs(value)) : '--')
  const isDarkMode = useColorScheme() === 'dark'
  let textColor = isDarkMode ? '#fff' : '#000'

  if (_.isNumber(value)) {
    if (value > 0) {
      textColor = '#00cc00'
    } else if (value < 0) {
      textColor = '#cc0000'
    }
  }

  if (value < 0 || alwaysShowSign) {
    const sign = value < 0 ? '-' : value > 0 ? '+' : ' '
    formatted = sign + formatted
  }

  const styles = StyleSheet.create({
    textColor: {
      color: textColor,
      fontFamily: "monospace"
    }
  })

  return (
    <ScrollView horizontal={true}>
      <Text style={[style, styles.textColor]}>{formatted}</Text>
    </ScrollView>
  )
}

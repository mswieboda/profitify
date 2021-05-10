import React from 'react'
import {
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native'
import _ from 'lodash'

export default ({ value, formatter, style }) => {
  const formatted = _.isNumber(value) ? formatter(value) : '--'
  const isDarkMode = useColorScheme() === 'dark'
  let textColor = isDarkMode ? '#fff' : '#000'

  if (_.isNumber(value)) {
    if (value > 0) {
      textColor = '#00cc00'
    } else if (value < 0) {
      textColor = '#cc0000'
    }
  }

  const styles = StyleSheet.create({
    textColor: {
      color: textColor
    }
  })

  return (
    <Text style={[style, styles.textColor]}>{formatted}</Text>
  )
}

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native'

interface Props {
  onTradePriceChange: (value) => void
  onTradeQuantityChange: (value) => void
  onCurrentPriceChange: (value) => void
}

export default class TradeDetails extends Component<Props> {
  render() {
    return (
      <View>
        <Label>
          Trade Price
        </Label>
        <Input placeholder="price" onChange={this.props.onTradePriceChange} />
        <Label>
          Trade Quantity
        </Label>
        <Input placeholder="quantity" onChange={this.props.onTradeQuantityChange} />
        <Label>
          Current Price
        </Label>
        <Input placeholder="price" onChange={this.props.onCurrentPriceChange} />
      </View>
    )
  }
}

const Label = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: isDarkMode ? '#fff' : '#000'
    }
  })

  return (
    <Text style={styles.text}>
      {children}
    </Text>
  )
}

const Input = ({ placeholder, onChange }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = StyleSheet.create({
    input: {
      fontSize: 30,
      color: isDarkMode ? '#fff' : '#000',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: isDarkMode ? '#fff' : '#000'
    },
  })

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      onChangeText={onChange}
    />
  )
}

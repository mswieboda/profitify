import React, { Component } from 'react'
import { action, observable, computed } from 'mobx'
import _ from 'lodash'
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { observer } from 'mobx-react/native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import Page from 'app/page'
import ProfitResult from 'app/profit-result'
import TradeDetails from 'app/trade-details'

@observer
export default class ProfitScreen extends Component<NavigationStackScreenProps> {
  @observable
  tradeQuantity

  @observable
  tradePrice

  @observable
  currentPrice

  @computed
  get difference() {
    if (!_.isNumber(this.currentPrice) || !_.isNumber(this.tradePrice)) {
      return null
    }

    const result = this.currentPrice - this.tradePrice

    console.log(">>> difference: ", result)

    return result
  }

  @computed
  get percent() {
    if (!_.isNumber(this.difference) || !_.isNumber(this.tradePrice)) {
      return null
    }

    return this.difference / this.tradePrice
  }

  @computed
  get dollars() {
    if (!_.isNumber(this.difference) || !_.isNumber(this.tradeQuantity)) {
      return null
    }

    return this.difference * this.tradeQuantity
  }

  parseInput(value) {
    const parsed = parseFloat(value)

    return !_.isEmpty(value) && _.isNumber(parsed) && !isNaN(parsed) ? parsed : null
  }

  @action.bound
  updateTradePrice(value) {
    this.tradePrice = this.parseInput(value)
  }

  @action.bound
  updateTradeQuantity(value) {
    this.tradeQuantity = this.parseInput(value)
  }

  @action.bound
  updateCurrentPrice(value) {
    this.currentPrice = this.parseInput(value)
  }

  render() {
    return (
      <Page>
        <ProfitResult
          percent={this.percent}
          dollars={this.dollars}
        />
        <TradeDetails
          onTradePriceChange={this.updateTradePrice}
          onTradeQuantityChange={this.updateTradeQuantity}
          onCurrentPriceChange={this.updateCurrentPrice}
        />
      </Page>
    )
  }
}

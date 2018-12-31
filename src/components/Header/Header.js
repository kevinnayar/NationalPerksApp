import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { object } from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './HeaderStyles'

class Header extends Component {
  static propTypes = {
    navigation: object.isRequired,
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => this.props.navigation.navigate('parkList')}
        style={styles.header}
      >

        <View>
          <Text style={styles.headerText}>National Perks</Text>
        </View>

      </TouchableOpacity>
    )
  }
}

export default withNavigation(Header)

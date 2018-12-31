import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { buffer, colors } from '../../assets/styles/defaults'
import { bool, object, string } from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './HeaderStyles'

class Header extends Component {
  static propTypes = {
    backButton: bool.isRequired,
    navigation: object.isRequired,
    title: string.isRequired,
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => this.props.navigation.navigate('parkList')}
        style={styles.header}
      >

        { this.props.backButton ? (
          <Icon
            name={'keyboard-backspace'}
            size={buffer * 1.5}
            color={colors.midGreen}
            containerStyle={styles.backButton}
          />
        ) : (
          null
        )}

        <View>
          <Text style={this.props.backButton ? [ styles.headerText, styles.headerTextWithBack ]: styles.headerText}>
          {this.props.title}
          </Text>
        </View>

      </TouchableOpacity>
    )
  }
}

export default withNavigation(Header)

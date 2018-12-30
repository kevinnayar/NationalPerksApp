import React, { Component } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { buffer, colors } from '../../assets/styles/defaults'
import styles from './FavoriteButtonStyles'

class FavoriteButton extends Component {
  handleButtonPress() {
    this.props.saveOrUnsavePark(this.props.id)
  }

  render() {
    const favorited = this.props.savedParks.includes(this.props.id)

    return (
      <View style={styles.favorite}>

        <TouchableOpacity
          style={styles.favoriteButton}
          hitSlop={{
            top: buffer,
            left: buffer,
            bottom: buffer,
            right: buffer,
          }}
          onPress={() => this.handleButtonPress()}
        >

          <Icon
            name={`${favorited ? 'favorite' : 'favorite-border'}`}
            size={buffer}
            color={colors.white}
          />

        </TouchableOpacity>

      </View>
    )
  }
}

export default FavoriteButton

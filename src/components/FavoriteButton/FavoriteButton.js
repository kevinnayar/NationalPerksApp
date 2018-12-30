import React, { Component } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { buffer, colors } from '../../assets/styles/defaults'
import styles from './FavoriteButtonStyles'

class FavoriteButton extends Component {
  render() {
    const { id, savedParks, saveOrUnsavePark } = this.props
    const favorited = savedParks.includes(id)

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
          onPress={() => saveOrUnsavePark(id)}
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

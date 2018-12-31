import React, { Component } from 'react'
import { buffer, colors } from '../../assets/styles/defaults'
import { array, func, string } from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './FavoriteButtonStyles'

class FavoriteButton extends Component {
  static propTypes = {
    id: string.isRequired,
    savedParks: array.isRequired,
    saveOrUnsavePark: func.isRequired,
  }

  handleButtonPress = () => {
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
          onPress={this.handleButtonPress}
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

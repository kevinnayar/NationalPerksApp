import React, { Component } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { buffer, colors } from '../../assets/styles/defaults'
import styles from './FavoriteButtonStyles'

class FavoriteButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorited: false,
    }
  }

  handleButtonPress = (item) => {
    if (!this.state.favorited) {
      Alert.alert(`You favorited ${item.title} National Park!`)
    }
    else {
      Alert.alert(`You removed ${item.title} National Park from your favorites`)
    }

    this.setState({
      ...this.state,
      favorited: !this.state.favorited,
    })
  }

  render() {
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
          onPress={() => this.handleButtonPress(this.props.item)}
        >
          <Icon
            name={`${this.state.favorited ? 'favorite' : 'favorite-border'}`}
            size={buffer}
            color={colors.white}
          />
        </TouchableOpacity>

      </View>
    )
  }
}

export default FavoriteButton

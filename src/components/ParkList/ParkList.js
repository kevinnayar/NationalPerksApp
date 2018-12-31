import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { array, bool, object } from 'prop-types'
import { buffer, colors } from '../../assets/styles/defaults'
import { ActivityIndicator, Animated, FlatList, TouchableOpacity, Text, View } from 'react-native'
import DynamicImage from '../DynamicImage/DynamicImage'
import FavoriteButton from '../FavoriteButton/FavoriteButtonContainer'
import styles from './ParkListStyles'

class ParkList extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    navigation: object.isRequired,
    parks: array.isRequired,
  }

  constructor(props) {
    super(props)
    this.animatedOpacity = new Animated.Value(0.5)
    this.animatedUp = new Animated.Value(buffer * 4)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedUp, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start()
  }

  handleItemPress(park) {
    this.props.navigation.navigate('park', { park })
  }

  renderItem = ({ item }) => {
    const animatedItemStyle = {
      opacity: this.animatedOpacity,
      transform: [
        { translateY: this.animatedUp },
      ],
    }

    return (
      <Animated.View style={animatedItemStyle}>

        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.item}
          onPress={() => this.handleItemPress(item)}
        >

          <View style={styles.image}>
            <DynamicImage id={item.id} />
            <FavoriteButton id={item.id} />
          </View>

          <View style={styles.text}>
            <Text style={styles.titleText}>{item.title.toUpperCase()}</Text>
            <Text style={styles.subTitleText}>{`Established ${item.date_established_readable}`}</Text>
          </View>

        </TouchableOpacity>

      </Animated.View>
    )
  }

  render() {
    return (
      <View>
        { this.props.isLoading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color={colors.white} />
          </View>
        ) : (
          <FlatList
            data={this.props.parks}
            keyExtractor={item => item.id}
            removeClippedSubviews={true}
            style={styles.items}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}

export default withNavigation(ParkList)

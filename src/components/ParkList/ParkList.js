import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { array, bool } from 'prop-types'
import { buffer, colors } from '../../assets/styles/defaults'
import { ActivityIndicator, Animated, FlatList, TouchableOpacity, Text, View } from 'react-native'
import DynamicImage from '../DynamicImage/DynamicImage'
import FavoriteButton from '../FavoriteButton/FavoriteButtonContainer'
import styles from './ParkListStyles'

class ParkList extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    parks: array.isRequired,
  }

  constructor(props) {
    super(props)
    this.animatedOpacity = new Animated.Value(0.5)
    this.animatedImageUp = new Animated.Value(buffer * 3)
    this.animatedTextUp = new Animated.Value(buffer * 3)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedOpacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedImageUp, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTextUp, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start()
  }

  handleItemPress(park) {
    this.props.navigation.navigate('park', { park })
  }

  render() {
    const animatedImageStyle = {
      opacity: this.animatedOpacity,
      transform: [
        { translateY: this.animatedImageUp },
      ],
    }
    const animatedTextStyle = {
      opacity: this.animatedOpacity,
      transform: [
        { translateY: this.animatedTextUp },
      ],
    }

    return (
      <View>
        { this.props.isLoading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color={colors.white} />
          </View>
        ) : (
          <FlatList
            data={this.props.parks}
            keyExtractor={(item, index) => item.id}
            removeClippedSubviews={true}
            style={styles.items}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.75}
                  style={styles.item}
                  onPress={() => this.handleItemPress(item)}
                >

                  <Animated.View style={[ styles.image, animatedImageStyle ]}>
                    <DynamicImage id={item.id} />
                    <FavoriteButton id={item.id} />
                  </Animated.View>

                  <Animated.View style={[ styles.text, animatedTextStyle ]}>
                    <Text style={styles.titleText}>{item.title.toUpperCase()}</Text>
                    <Text style={styles.subTitleText}>{`Established ${item.date_established_readable}`}</Text>
                  </Animated.View>

                </TouchableOpacity>
              )
            }}
          />
        )}
      </View>
    )
  }
}

export default withNavigation(ParkList)

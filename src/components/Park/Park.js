import React, { Component } from 'react'
import { array, bool, object, shape, string } from 'prop-types'
import { buffer, colors } from '../../assets/styles/defaults'
import { Icon } from 'react-native-elements'
import { Animated, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { WebBrowser } from 'expo'
import DynamicImage from '../DynamicImage/DynamicImage'
import FavoriteButton from '../FavoriteButton/FavoriteButtonContainer'
import styles from './ParkStyles'

class Park extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    npsParkData: object,
    npsParkArticles: array,
    park: shape({
      id: string,
      image: shape({
        attribution_url: string,
        attribution: string,
      }),
      title: string,
      states: array,
      date_established_readable: string,
      description: string,
      area: shape({
        acres: string,
      }),
      visitors: string,
    }).isRequired,
  }

  handleLinkPress(url) {
    WebBrowser.openBrowserAsync(url)
  }

  render() {
    const { park } = this.props

    this.animatedOpacityImage = new Animated.Value(0.5)
    this.animatedOpacityText = new Animated.Value(0.5)
    this.animatedTextUp = new Animated.Value(buffer * 4)

    Animated.parallel([
      Animated.timing(this.animatedOpacityImage, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedOpacityText, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTextUp, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start()

    const animatedImageStyle = {
      opacity: this.animatedOpacityImage,
    }
    const animatedTextStyle = {
      opacity: this.animatedOpacityText,
      transform: [
        { translateY: this.animatedTextUp },
      ],
    }

    return (
      <ScrollView contentContainerStyle={styles.park}>

        <Animated.View style={[ styles.image, animatedImageStyle ]}>

          <DynamicImage id={park.id} />
          <FavoriteButton id={park.id} />

          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.imageLink}
            onPress={() => this.handleLinkPress(park.image.attribution_url)}
          >
            <Text style={styles.imageLinkText}>Image source: {park.image.attribution}</Text>
          </TouchableOpacity>

        </Animated.View>

        <Animated.View style={[ styles.overview, animatedTextStyle ]}>

          <Text style={styles.titleText}>{park.title.toUpperCase()}</Text>

          <FlatList
            data={park.states}
            keyExtractor={(item) => item.id}
            style={styles.state}
            renderItem={({item, index}) => {
              return (
                <Text style={styles.stateText}>{(index ? ', ' : '') + item.title}</Text>
              )
            }}
          />

          <Text style={styles.dateText}>{`Established ${park.date_established_readable}`}</Text>
          <Text style={styles.descriptionText}>{park.description}</Text>

          <View style={styles.details}>

            <View style={[ styles.detailsItem, styles.detailsItemOdd ]}>
              <Icon
                containerStyle={styles.icon}
                name={'explore'}
                size={buffer}
                color={colors.white}
              />
              <Text style={styles.detailsText}>{park.area.acres} acres</Text>
            </View>

            <View style={styles.detailsItem}>
              <Icon
                containerStyle={styles.icon}
                name={'group'}
                size={buffer}
                color={colors.white}
              />
              <Text style={styles.detailsText}>{park.visitors} annual visitors</Text>
            </View>

          </View>

          {this.props.npsParkData && (
            <View>
              <Text style={styles.descriptionText}>{this.props.npsParkData.description}</Text>
              <Text style={styles.subTitleText}>Weather Info</Text>
              <Text style={styles.descriptionText}>{this.props.npsParkData.weatherInfo}</Text>
            </View>
          )}

          {this.props.npsParkArticles && (
            <View>
              <Text style={styles.subTitleText}>Articles</Text>
              <FlatList
                data={this.props.npsParkArticles}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.75}
                      onPress={() => this.handleLinkPress(item.url)}
                    >
                      <Text style={styles.descriptionText}>{item.title}</Text>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          )}

        </Animated.View>

      </ScrollView>
    )
  }
}

export default Park

import React, { Component } from 'react'
import { object } from 'prop-types'
import { buffer, colors } from '../../assets/styles/defaults'
import { Icon } from 'react-native-elements'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { WebBrowser } from 'expo'
import DynamicImage from '../DynamicImage/DynamicImage'
import styles from './ParkStyles'

class Park extends Component {
  static propTypes = {
    park: object.isRequired,
  }

  handleLinkPress(url) {
    WebBrowser.openBrowserAsync(url)
  }

  render() {
    const { park } = this.props

    return (
      <ScrollView contentContainerStyle={styles.park}>

        <View style={styles.image}>
          <DynamicImage id={park.id} />
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.imageLink}
            onPress={() => this.handleLinkPress(park.image.attribution_url)}
          >
            <Text style={styles.imageLinkText}>Image source: {park.image.attribution}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.overview}>
          <Text style={styles.titleText}>{park.title.toUpperCase()}</Text>
          <Text style={styles.subTitleText}>{`Established ${park.date_established_readable}`}</Text>
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
        </View>

      </ScrollView>
    )
  }
}

export default Park

/*
<Text>{park.nps_link}</Text>
*/

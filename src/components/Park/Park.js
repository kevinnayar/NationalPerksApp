import React, { Component } from 'react'
import { object } from 'prop-types'
import { colors } from '../../assets/styles/defaults'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import DynamicImage from '../DynamicImage/DynamicImage'
import styles from './ParkStyles'

class Park extends Component {
  static propTypes = {
    park: object.isRequired,
  }

  render() {
    const { park } = this.props

    return (
      <ScrollView contentContainerStyle={styles.park}>

        <View style={styles.image}>
          <DynamicImage id={park.id} />
        </View>

        <View style={styles.text}>
          <Text style={styles.titleText}>{park.title.toUpperCase()}</Text>
          <Text style={styles.subTitleText}>{`Established ${park.date_established_readable}`}</Text>
          <Text style={styles.descriptionText}>{park.description}</Text>
        </View>

      </ScrollView>
    )
  }
}

export default Park

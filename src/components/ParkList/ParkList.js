import React, { Component } from 'react'
import { array, bool } from 'prop-types'
import { colors } from '../../assets/styles/defaults'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DynamicImage from '../DynamicImage/DynamicImage'
import styles from './ParkListStyles'

class ParkList extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    parks: array.isRequired,
  }

  handleItemPress = (item) => {
    console.log(item)
  }

  renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.item}
      onPress={() => this.handleItemPress(item)}
    >
      <View style={styles.image}>
        <DynamicImage id={item.id} />
      </View>

      <View style={styles.text}>
        <Text style={styles.titleText}>{item.title.toUpperCase()}</Text>
        <Text style={styles.subTitleText}>{`Established ${item.date_established_readable}`}</Text>
      </View>

    </TouchableOpacity>
   )

  render() {
    const { isLoading, parks } = this.props

    return (
      <View>
        { isLoading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color={colors.white} />
          </View>
        ) : (
          <FlatList
            data={parks}
            keyExtractor={(item, index) => item.id}
            removeClippedSubviews={true}
            renderItem={this.renderItem}
            style={styles.items}
          />
        )}
      </View>
    )
  }
}

export default ParkList

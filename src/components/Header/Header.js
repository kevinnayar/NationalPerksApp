import React from 'react'
import { withNavigation } from 'react-navigation'
import { colors } from '../../assets/styles/defaults'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './HeaderStyles'

const Header = (props) => (
  <TouchableOpacity
    activeOpacity={0.75}
    onPress={() => props.navigation.navigate('parkList')}
    style={styles.header}
  >
    <View>
      <Text style={styles.headerText}>National Perks</Text>
    </View>
  </TouchableOpacity>
)

export default withNavigation(Header)

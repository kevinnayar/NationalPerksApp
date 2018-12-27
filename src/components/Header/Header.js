import React from 'react'
import { colors } from '../../assets/styles/defaults'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './HeaderStyles'

const Header = () => (
  <TouchableOpacity
    activeOpacity={0.75}
    onPress={() => console.log('National Perks!')}
    style={styles.header}
  >
    <View>
      <Text style={styles.headerText}>National Perks</Text>
    </View>
  </TouchableOpacity>
)

export default Header

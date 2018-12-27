import React from 'react'
import { colors } from '../../assets/styles/defaults'
import { LinearGradient } from 'expo'
import { View } from 'react-native'
import Header from '../Header/Header'
import styles from './LayoutStyles'

export default Layout = ({ children, navigate }) => (
  <View style={styles.layout}>

    <View style={styles.header}>
      <Header navigate={navigate} />
    </View>

    <LinearGradient
      style={styles.main}
      colors={[ colors.midGreen, colors.midBlue ]}
    >
      {children}
    </LinearGradient>

  </View>
)

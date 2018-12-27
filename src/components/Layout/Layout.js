import React, { Component } from 'react'
import { colors } from '../../assets/styles/defaults'
import { LinearGradient } from 'expo'
import { View } from 'react-native'
import Header from '../Header/Header'
import styles from './LayoutStyles'

const Layout = ({ children }) => (
  <View style={styles.layout}>

    <View style={styles.header}>
      <Header />
    </View>

    <LinearGradient
      style={styles.main}
      colors={[ colors.midGreen, colors.midBlue ]}
    >
      {children}
    </LinearGradient>

  </View>
)

export default Layout

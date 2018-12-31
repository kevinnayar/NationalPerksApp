import React, { Component } from 'react'
import { bool, node, string } from 'prop-types'
import { colors } from '../../assets/styles/defaults'
import { LinearGradient } from 'expo'
import { View } from 'react-native'
import Header from '../Header/Header'
import styles from './LayoutStyles'

class Layout extends Component {
  static propTypes = {
    backButton: bool.isRequired,
    children: node.isRequired,
    title: string.isRequired,
  }

  render() {
    return (
      <View style={styles.layout}>

        <View style={styles.header}>
          <Header
            title={this.props.title}
            backButton={this.props.backButton}
          />
        </View>

        <LinearGradient
          style={styles.main}
          colors={[ colors.midGreen, colors.midBlue ]}
        >
          {this.props.children}
        </LinearGradient>

      </View>
    )
  }
}

export default Layout

import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Layout from '../Layout/Layout'

const ParksScreen = () => {
  return (
    <Layout>
    </Layout>
  )
}

const ParkScreen = () => {
  return (
    <Layout>
    </Layout>
  )
}

const screenConfig = {
  parks: { screen: ParksScreen },
  park: { screen: ParkScreen },
}

const TabNavigator = createBottomTabNavigator(screenConfig)
const TabContainer = createAppContainer(TabNavigator)
const ScreenContainer = ({ isLoading }) => <TabContainer screenProps={{ isLoading: isLoading }} />

export default ScreenContainer




// const tabBarOptions = {
//   activeTintColor: colors.lightPurple,
//   activeBackgroundColor: colors.blackAlpha,
//   inactiveTintColor: colors.darkPurple,
//   inactiveBackgroundColor: colors.black,
//   showLabel: false,
//   showIcon: true,
//   style: {
//     height: navHeight,
//     borderTopColor: 'transparent',
//     borderTopWidth: 0,
//   }
// }

// const navigatorConfig = {
//   defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ tintColor }) => {
//       const { routeName } = navigation.state
//       let iconName
//
//       if (routeName === 'distilleries') {
//         iconName = 'menu'
//       }
//       else if (routeName === 'regions') {
//         iconName = 'explore'
//       }
//       else if (routeName === 'distillery') {
//         iconName = 'local-drink'
//       }
//
//       return (
//         <Icon
//           name={iconName}
//           size={buffer}
//           color={tintColor} />
//       )
//     },
//   }),
//   tabBarOptions,
// }













/*
import React, { Component } from 'react'
import { array, bool } from 'prop-types'
import { buffer, colors, fontSizes } from '../../assets/styles/defaults'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import DynamicImage from '../DynamicImage/DynamicImage'
import Header from '../Header/Header'

class Screens extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    parks: array.isRequired,
  }

  renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.image}>
        <DynamicImage id={item.id} />
      </View>
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
      <FlatList
        style={styles.states}
        data={item.states}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.state}>
              <Text style={styles.stateTitle}>{item.title.toUpperCase()}</Text>
            </View>
          )
        }}
      />
    </View>
   )

  render() {
    const { isLoading, parks } = this.props

    return (
      <View style={{ }}>
        <Header title={'National Perks'} />
        { isLoading ? (
          <View>
            <ActivityIndicator size='large' color='red' />
          </View>
        ) : (
          <FlatList
            data={parks}
            keyExtractor={(item, index) => item.id}
            removeClippedSubviews={true}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}

export default Screens

const styles = StyleSheet.create({
  item: {
    borderBottomColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 200,
    justifyContent: 'center',
  },
  image: {
    height: 200,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 5,
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: colors.blackAlpha,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3
  },
  states: {
    flex: 1,
    flexDirection: 'row',
  },
  state: {
    backgroundColor: colors.lightGreen,
    borderRadius: 2,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 6,
  },
  stateTitle: {
    color: colors.white,
    fontSize: 10,
  },
})
*/

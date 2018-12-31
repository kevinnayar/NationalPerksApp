import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { bool, func, shape } from 'prop-types'
import Layout from '../Layout/Layout'
import ParkList from '../ParkList/ParkListContainer'
import Park from '../Park/Park'

const ParkListScreen = ({ screenProps: { isLoading } }) => {
  return (
    <Layout>
      <ParkList isLoading={isLoading} />
    </Layout>
  )
}

ParkListScreen.propTypes = {
  screenProps: shape({
    isLoading: bool.isRequired,
  }),
}

const ParkScreen = ({ navigation: { getParam } }) => {
  return (
    <Layout>
      <Park park={getParam('park')} />
    </Layout>
  )
}

ParkScreen.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  }),
}

const screenConfig = {
  parkList: { screen: ParkListScreen },
  park: { screen: ParkScreen },
}

const tabNavigatorConfig = {
  defaultNavigationOptions: () => ({
    tabBarVisible: false,
  }),
}

const TabNavigator = createBottomTabNavigator(screenConfig, tabNavigatorConfig)

const TabContainer = createAppContainer(TabNavigator)

const ScreensContainer = ({ isLoading }) => {
  return (
    <TabContainer screenProps={{ isLoading: isLoading }} />
  )
}

ScreensContainer.propTypes = {
  isLoading: bool.isRequired,
}

export default ScreensContainer

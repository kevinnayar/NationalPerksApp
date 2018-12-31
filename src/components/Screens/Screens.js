import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { bool, func, shape } from 'prop-types'
import Layout from '../Layout/Layout'
import ParkList from '../ParkList/ParkListContainer'
import Park from '../Park/ParkContainer'
import SavedParkList from '../SavedParkList/SavedParkListContainer'

const ParkListScreen = ({ screenProps: { isLoading } }) => {
  return (
    <Layout title={'National Perks'} backButton={false}>
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
    <Layout title={'National Perks'} backButton={true}>
      <Park park={getParam('park')} />
    </Layout>
  )
}

ParkScreen.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  }),
}

const SavedParkListScreen = ({ screenProps: { isLoading } }) => {
  return (
    <Layout title={'Saved Parks'} backButton={true}>
      <SavedParkList isLoading={isLoading} />
    </Layout>
  )
}

SavedParkListScreen.propTypes = {
  screenProps: shape({
    isLoading: bool.isRequired,
  }),
}

const screenConfig = {
  parkList: { screen: ParkListScreen },
  park: { screen: ParkScreen },
  savedParkList: { screen: SavedParkListScreen },
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

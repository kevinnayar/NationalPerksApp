import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Layout from '../Layout/Layout'
import ParkList from '../ParkList/ParkListContainer'
import Park from '../Park/Park'

const ParkListScreen = ({ screenProps: { isLoading } }) => (
  <Layout>
    <ParkList isLoading={isLoading} />
  </Layout>
)

const ParkScreen = ({ navigation: { getParam } }) => (
  <Layout>
    <Park park={getParam('park')} />
  </Layout>
)

const screenConfig = {
  parkList: { screen: ParkListScreen },
  park: { screen: ParkScreen },
}

const tabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarVisible: false,
  }),
}

const TabNavigator = createBottomTabNavigator(screenConfig, tabNavigatorConfig)
const TabContainer = createAppContainer(TabNavigator)

const ScreenContainer = ({ isLoading }) => (
  <TabContainer screenProps={{ isLoading: isLoading }} />
)

export default ScreenContainer

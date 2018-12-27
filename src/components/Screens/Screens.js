import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Layout from '../Layout/Layout'
import ParkList from '../ParkList/ParkListContainer'

const ParkListScreen = ({ screenProps: { isLoading } }) => {
  return (
    <Layout>
      <ParkList isLoading={isLoading} />
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
  parkList: { screen: ParkListScreen },
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

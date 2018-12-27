import { buffer, height, headerHeight, mainHeight, width } from '../../assets/styles/defaults'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width,
    height,
  },
  header: {
    height: headerHeight,
  },
  main: {
    height: mainHeight,
  },
})

export default styles

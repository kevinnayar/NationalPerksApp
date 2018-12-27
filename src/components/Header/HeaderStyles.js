import { buffer, colors, fontSizes, headerHeight } from '../../assets/styles/defaults'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: buffer * 1.2,
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: buffer,
    color: colors.midGreen,
    fontSize: fontSizes.title,
    fontFamily: 'montserrat-black',
  },
})

export default styles

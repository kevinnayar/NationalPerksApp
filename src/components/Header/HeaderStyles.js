import { buffer, colors, fontSizes, hairline } from '../../assets/styles/defaults'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: buffer * 1.2,
    justifyContent: 'center',
    borderBottomColor: colors.midGreen,
    borderBottomWidth: hairline,
  },
  headerText: {
    marginLeft: buffer,
    color: colors.midGreen,
    fontSize: fontSizes.xL,
    fontFamily: 'montserrat-black',
  },
})

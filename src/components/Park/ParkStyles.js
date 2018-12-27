import { buffer, colors, fontSizes, hairline, mainHeight, width } from '../../assets/styles/defaults'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  park: {
  },
  image: {
    width,
    height: buffer * 14,
  },
  text: {
    margin: buffer,
  },
  titleText: {
    color: colors.white,
    fontSize: fontSizes.xL,
    fontFamily: 'montserrat-black',
    marginBottom: buffer / 4,
  },
  subTitleText: {
    color: colors.white,
    fontSize: fontSizes.xS,
    fontFamily: 'montserrat',
    marginBottom: buffer,
  },
  descriptionText: {
    color: colors.white,
    fontSize: fontSizes.s,
    fontFamily: 'montserrat',
    lineHeight: fontSizes.xL,
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

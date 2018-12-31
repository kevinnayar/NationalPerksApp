import { buffer, colors, fontSizes, mainHeight, width } from '../../assets/styles/defaults'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  activityIndicator: {
    height: mainHeight,
    justifyContent: 'center',
  },
  items: {
    marginLeft: buffer,
    marginRight: buffer,
  },
  item: {
    justifyContent: 'center',
    width,
    height: buffer * 12,
    marginTop: buffer,
  },
  image: {
    width: width - (buffer * 2),
    height: buffer * 8,
  },
  text: {
    backgroundColor: colors.white,
    height: buffer * 4,
    flex: 1,
  },
  titleText: {
    marginTop: buffer,
    marginBottom: buffer / 4,
    marginLeft: buffer,
    color: colors.darkBlue,
    fontSize: fontSizes.l,
    fontFamily: 'montserrat-black',
  },
  subTitleText: {
    marginLeft: buffer,
    color: colors.darkBlue,
    fontSize: fontSizes.xS,
    fontFamily: 'montserrat',
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
  emptyContainer: {

  },
  footerContainer: {
    height: buffer * 3.5,
  },
})

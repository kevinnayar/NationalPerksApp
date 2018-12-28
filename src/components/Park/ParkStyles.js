import { buffer, colors, fontSizes, hairline, mainHeight, width } from '../../assets/styles/defaults'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  park: {
  },
  image: {
    width,
    height: buffer * 14,
  },
  imageLink: {
    position: 'absolute',
    left: buffer / 2,
    bottom: buffer / 2,
    backgroundColor: colors.blackAlpha,
    paddingVertical: buffer / 4,
    paddingHorizontal: buffer / 1.5,
    borderRadius: buffer,
  },
  imageLinkText: {
    color: colors.white,
    fontFamily: 'montserrat',
    fontSize: fontSizes.xS,
  },
  overview: {
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
    marginBottom: buffer,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: colors.white,
    borderTopWidth: hairline,
    borderBottomColor: colors.white,
    borderBottomWidth: hairline,
  },
  detailsItem: {
    width: '50%',
    alignItems: 'center',
  },
  detailsItemOdd: {
    borderRightColor: colors.white,
    borderRightWidth: hairline,
  },
  icon: {
    marginTop: buffer / 1.5,
    marginBottom: buffer / 2,
  },
  detailsText: {
    color: colors.white,
    fontSize: fontSizes.s,
    fontFamily: 'montserrat',
    marginBottom: buffer / 1.5,
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

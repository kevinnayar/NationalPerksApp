import { buffer, colors, fontSizes, hairline, width } from '../../assets/styles/defaults'
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
  states: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  stateText: {
    color: colors.white,
    fontSize: fontSizes.m,
    fontFamily: 'montserrat',
    marginBottom: buffer / 4,
    width: 'auto',
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
    marginBottom: buffer,
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
})

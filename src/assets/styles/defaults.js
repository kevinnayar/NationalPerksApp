import { Dimensions, StyleSheet } from 'react-native'

const buffer = 20
const colors = {
  white: '#FFFFFF',
  black: '#000000',
  whiteAlpha: 'rgba(255,255,255,0.5)',
  blackAlpha: 'rgba(0,0,0,0.5)',
  lightGreen: '#C4F6DB',
  midGreen: '#6BE0DD',
  darkGreen: '#09B5D6',
  lightBlue: '#1C71E2',
  midBlue: '#1A63DD',
  darkBlue: '#012691',
}
const fontSizes = {
  xL: 18,
  l: 16,
  m: 14,
  s: 12,
  xS: 10,
}
const hairline = StyleSheet.hairlineWidth
const { height, width } = Dimensions.get('window')
const headerHeight = height * .12
const mainHeight = height * .88

module.exports = {
  buffer,
  colors,
  fontSizes,
  hairline,
  height,
  headerHeight,
  mainHeight,
  width,
}

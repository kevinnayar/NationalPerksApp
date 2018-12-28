import { StyleSheet } from 'react-native'
import { buffer, colors } from '../../assets/styles/defaults'

export default StyleSheet.create({
  favorite: {
    position: 'absolute',
    right: buffer,
    top: buffer,
    height: buffer,
    width: buffer,
  },
  favoriteButton: {
    height: buffer,
    width: buffer,
    color: colors.white,
  },
})

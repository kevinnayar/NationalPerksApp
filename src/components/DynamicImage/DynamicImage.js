import React, { Component } from 'react'
import { string } from 'prop-types'
import { Image, StyleSheet } from 'react-native'

class DynamicImage extends Component {
  static propTypes = {
    id: string.isRequired,
  }

  render() {
    const { id } = this.props

    if (id === 'park_acadia') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/acadia.jpg')} />
      )
    }
    if (id === 'park_american-samoa') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/american-samoa.jpg')} />
      )
    }
    if (id === 'park_arches') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/arches.jpg')} />
      )
    }
    if (id === 'park_badlands') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/badlands.jpg')} />
      )
    }
    if (id === 'park_big-bend') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/big-bend.jpg')} />
      )
    }
    if (id === 'park_biscayne') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/biscayne.jpg')} />
      )
    }
    if (id === 'park_black-canyon-of-the-gunnison') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/black-canyon-of-the-gunnison.jpg')} />
      )
    }
    if (id === 'park_bryce-canyon') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/bryce-canyon.jpg')} />
      )
    }
    if (id === 'park_canyonlands') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/canyonlands.jpg')} />
      )
    }
    if (id === 'park_capitol-reef') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/capitol-reef.jpg')} />
      )
    }
    if (id === 'park_carlsbad-caverns') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/carlsbad-caverns.jpg')} />
      )
    }
    if (id === 'park_channel-islands') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/channel-islands.jpg')} />
      )
    }
    if (id === 'park_congaree') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/congaree.jpg')} />
      )
    }
    if (id === 'park_crater-lake') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/crater-lake.jpg')} />
      )
    }
    if (id === 'park_cuyahoga-valley') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/cuyahoga-valley.jpg')} />
      )
    }
    if (id === 'park_death-valley') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/death-valley.jpg')} />
      )
    }
    if (id === 'park_denali') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/denali.jpg')} />
      )
    }
    if (id === 'park_dry-tortugas') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/dry-tortugas.jpg')} />
      )
    }
    if (id === 'park_everglades') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/everglades.jpg')} />
      )
    }
    if (id === 'park_gates-of-the-arctic') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/gates-of-the-arctic.jpg')} />
      )
    }
    if (id === 'park_glacier') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/glacier.jpg')} />
      )
    }
    if (id === 'park_glacier-bay') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/glacier-bay.jpg')} />
      )
    }
    if (id === 'park_grand-canyon') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/grand-canyon.jpg')} />
      )
    }
    if (id === 'park_grand-teton') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/grand-teton.jpg')} />
      )
    }
    if (id === 'park_great-basin') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/great-basin.jpg')} />
      )
    }
    if (id === 'park_great-sand-dunes') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/great-sand-dunes.jpg')} />
      )
    }
    if (id === 'park_great-smoky-mountains') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/great-smoky-mountains.jpg')} />
      )
    }
    if (id === 'park_guadalupe-mountains') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/guadalupe-mountains.jpg')} />
      )
    }
    if (id === 'park_haleakala') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/haleakala.jpg')} />
      )
    }
    if (id === 'park_hawaii-volcanoes') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/hawaii-volcanoes.jpg')} />
      )
    }
    if (id === 'park_hot-springs') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/hot-springs.jpg')} />
      )
    }
    if (id === 'park_isle-royale') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/isle-royale.jpg')} />
      )
    }
    if (id === 'park_joshua-tree') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/joshua-tree.jpg')} />
      )
    }
    if (id === 'park_katmai') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/katmai.jpg')} />
      )
    }
    if (id === 'park_kenai-fjords') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/kenai-fjords.jpg')} />
      )
    }
    if (id === 'park_kings-canyon') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/kings-canyon.jpg')} />
      )
    }
    if (id === 'park_kobuk-valley') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/kobuk-valley.jpg')} />
      )
    }
    if (id === 'park_lake-clark') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/lake-clark.jpg')} />
      )
    }
    if (id === 'park_lassen-volcanic') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/lassen-volcanic.jpg')} />
      )
    }
    if (id === 'park_mammoth-cave') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/mammoth-cave.jpg')} />
      )
    }
    if (id === 'park_mesa-verde') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/mesa-verde.jpg')} />
      )
    }
    if (id === 'park_mount-rainier') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/mount-rainier.jpg')} />
      )
    }
    if (id === 'park_north-cascades') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/north-cascades.jpg')} />
      )
    }
    if (id === 'park_olympic') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/olympic.jpg')} />
      )
    }
    if (id === 'park_petrified-forest') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/petrified-forest.jpg')} />
      )
    }
    if (id === 'park_pinnacles') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/pinnacles.jpg')} />
      )
    }
    if (id === 'park_redwood') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/redwood.jpg')} />
      )
    }
    if (id === 'park_rocky-mountain') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/rocky-mountain.jpg')} />
      )
    }
    if (id === 'park_saguaro') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/saguaro.jpg')} />
      )
    }
    if (id === 'park_sequoia') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/sequoia.jpg')} />
      )
    }
    if (id === 'park_shenandoah') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/shenandoah.jpg')} />
      )
    }
    if (id === 'park_theodore-roosevelt') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/theodore-roosevelt.jpg')} />
      )
    }
    if (id === 'park_virgin-islands') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/virgin-islands.jpg')} />
      )
    }
    if (id === 'park_voyageurs') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/voyageurs.jpg')} />
      )
    }
    if (id === 'park_wind-cave') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/wind-cave.jpg')} />
      )
    }
    if (id === 'park_wrangell–st-elias') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/wrangell–st-elias.jpg')} />
      )
    }
    if (id === 'park_yellowstone') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/yellowstone.jpg')} />
      )
    }
    if (id === 'park_yosemite') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/yosemite.jpg')} />
      )
    }
    if (id === 'park_zion') {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/zion.jpg')} />
      )
    }
    else {
      return (
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../../assets/images/parks/zion.jpg')} />
      )
    }
  }
}

export default DynamicImage

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
})

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Image } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import Screens from './Screens/ScreensContainer/'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    }
    else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}

export default class App extends Component {
  state = {
    isReady: false,
  }

  async loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../assets/images/icon.png'),
      require('../assets/images/splash-gradient.png'),
      require('../assets/images/parks/acadia.jpg'),
      require('../assets/images/parks/american-samoa.jpg'),
      require('../assets/images/parks/arches.jpg'),
      require('../assets/images/parks/badlands.jpg'),
      require('../assets/images/parks/big-bend.jpg'),
      require('../assets/images/parks/biscayne.jpg'),
      require('../assets/images/parks/black-canyon-of-the-gunnison.jpg'),
      require('../assets/images/parks/bryce-canyon.jpg'),
      require('../assets/images/parks/canyonlands.jpg'),
      require('../assets/images/parks/capitol-reef.jpg'),
      require('../assets/images/parks/carlsbad-caverns.jpg'),
      require('../assets/images/parks/channel-islands.jpg'),
      require('../assets/images/parks/congaree.jpg'),
      require('../assets/images/parks/crater-lake.jpg'),
      require('../assets/images/parks/cuyahoga-valley.jpg'),
      require('../assets/images/parks/death-valley.jpg'),
      require('../assets/images/parks/denali.jpg'),
      require('../assets/images/parks/dry-tortugas.jpg'),
      require('../assets/images/parks/everglades.jpg'),
      require('../assets/images/parks/gates-of-the-arctic.jpg'),
      require('../assets/images/parks/glacier.jpg'),
      require('../assets/images/parks/glacier-bay.jpg'),
      require('../assets/images/parks/grand-canyon.jpg'),
      require('../assets/images/parks/grand-teton.jpg'),
      require('../assets/images/parks/great-basin.jpg'),
      require('../assets/images/parks/great-sand-dunes.jpg'),
      require('../assets/images/parks/great-smoky-mountains.jpg'),
      require('../assets/images/parks/guadalupe-mountains.jpg'),
      require('../assets/images/parks/haleakala.jpg'),
      require('../assets/images/parks/hawaii-volcanoes.jpg'),
      require('../assets/images/parks/hot-springs.jpg'),
      require('../assets/images/parks/isle-royale.jpg'),
      require('../assets/images/parks/joshua-tree.jpg'),
      require('../assets/images/parks/katmai.jpg'),
      require('../assets/images/parks/kenai-fjords.jpg'),
      require('../assets/images/parks/kings-canyon.jpg'),
      require('../assets/images/parks/kobuk-valley.jpg'),
      require('../assets/images/parks/lake-clark.jpg'),
      require('../assets/images/parks/lassen-volcanic.jpg'),
      require('../assets/images/parks/mammoth-cave.jpg'),
      require('../assets/images/parks/mesa-verde.jpg'),
      require('../assets/images/parks/mount-rainier.jpg'),
      require('../assets/images/parks/north-cascades.jpg'),
      require('../assets/images/parks/olympic.jpg'),
      require('../assets/images/parks/petrified-forest.jpg'),
      require('../assets/images/parks/pinnacles.jpg'),
      require('../assets/images/parks/redwood.jpg'),
      require('../assets/images/parks/rocky-mountain.jpg'),
      require('../assets/images/parks/saguaro.jpg'),
      require('../assets/images/parks/sequoia.jpg'),
      require('../assets/images/parks/shenandoah.jpg'),
      require('../assets/images/parks/theodore-roosevelt.jpg'),
      require('../assets/images/parks/virgin-islands.jpg'),
      require('../assets/images/parks/voyageurs.jpg'),
      require('../assets/images/parks/wind-cave.jpg'),
      require('../assets/images/parks/wrangell–st-elias.jpg'),
      require('../assets/images/parks/yellowstone.jpg'),
      require('../assets/images/parks/yosemite.jpg'),
      require('../assets/images/parks/zion.jpg'),
    ])

    const fontAssets = cacheFonts([
      {
        'montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
      },
      {
        'montserrat-black': require('../assets/fonts/Montserrat-Black.ttf'),
      },
    ])

    await Promise.all([ ...imageAssets, ...fontAssets ])
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    )
  }
}

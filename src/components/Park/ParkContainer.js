import React, { Component } from 'react'
import Park from '../../components/Park/Park'

class ParkContainer extends Component {
  render() {
    const { getParam, navigate } = this.props
    const park = getParam('park')

    return (
      <Park park={park} />
    )
  }
}

export default ParkContainer

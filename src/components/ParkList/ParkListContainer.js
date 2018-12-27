import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkList from '../../components/ParkList/ParkList'

class ParkListContainer extends Component {
  render() {
    const { parks, isLoading } = this.props

    return (
      <ParkList
        parks={parks}
        isLoading={isLoading}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    parks: state.parks,
  }
}

export default connect(mapStateToProps)(ParkListContainer)

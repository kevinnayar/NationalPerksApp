import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkList from '../../components/ParkList/ParkList'

class ParkListContainer extends Component {
  render() {
    const { isLoading, parks } = this.props

    return (
      <ParkList
        isLoading={isLoading}
        parks={parks}
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

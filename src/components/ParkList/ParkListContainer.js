import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkList from '../../components/ParkList/ParkList'

class ParkListContainer extends Component {
  render() {
    return (
      <ParkList
        isLoading={this.props.isLoading}
        parks={this.props.parks}
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

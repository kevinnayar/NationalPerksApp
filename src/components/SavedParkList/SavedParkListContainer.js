import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkList from '../../components/ParkList/ParkList'

class SavedParkListContainer extends Component {
  render() {
    const parks = this.props.parks.filter(park => this.props.savedParks.includes(park.id))

    return (
      <ParkList
        isLoading={this.props.isLoading}
        parks={parks}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    parks: state.parks,
    savedParks: state.savedParks,
  }
}

export default connect(mapStateToProps)(SavedParkListContainer)

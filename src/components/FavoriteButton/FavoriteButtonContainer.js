import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveOrUnsavePark } from '../../store/actions'
import FavoriteButton from './FavoriteButton'

class FavoriteButtonContainer extends Component {
  render() {
    return (
      <FavoriteButton
        id={this.props.id}
        saveOrUnsavePark={this.props.actions}
        savedParks={this.props.savedParks}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    savedParks: state.savedParks,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(saveOrUnsavePark, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButtonContainer)

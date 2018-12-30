import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveOrUnsavePark } from '../../store/actions'
import FavoriteButton from './FavoriteButton'

class FavoriteButtonContainer extends Component {
  render() {
    const { actions, id, savedParks } = this.props

    return (
      <FavoriteButton
        id={id}
        saveOrUnsavePark={actions}
        savedParks={savedParks} />
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

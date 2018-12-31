import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { func } from 'prop-types'
import { saveOrUnsavePark } from '../../store/actions'
import FavoriteButton from './FavoriteButton'

class FavoriteButtonContainer extends Component {
  static propTypes = {
    saveOrUnsavePark: func.isRequired,
  }

  render() {
    return (
      <FavoriteButton
        id={this.props.id}
        savedParks={this.props.savedParks}
        saveOrUnsavePark={this.props.saveOrUnsavePark}
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
    saveOrUnsavePark: bindActionCreators(saveOrUnsavePark, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButtonContainer)

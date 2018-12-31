import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { fetchParks, fetchSavedParks } from '../../store/actions'
import Screens from './Screens'

class ScreensContainer extends Component {
  static propTypes = {
    fetchParks: func.isRequired,
    fetchSavedParks: func.isRequired,
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    Promise.all([
      this.props.fetchParks(),
      this.props.fetchSavedParks(),
    ]).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    return (
      <Screens
        isLoading={this.state.isLoading}
      />
    )
  }
}

export default connect(null, { fetchParks, fetchSavedParks })(ScreensContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { fetchParks } from '../../store/actions'
import Screens from './Screens'

class ScreensContainer extends Component {
  static propTypes = {
    fetchParks: func.isRequired,
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    Promise.resolve(this.props.fetchParks())
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <Screens
        isLoading={this.state.isLoading}
      />
    )
  }
}

export default connect(null, { fetchParks })(ScreensContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchParks } from '../../store/actions'
import Screens from './Screens'

class ScreensContainer extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    Promise.resolve(this.props.fetchParks())
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <Screens
        isLoading={this.state.isLoading}
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

export default connect(mapStateToProps, { fetchParks })(ScreensContainer)

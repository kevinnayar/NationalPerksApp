import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, shape, string } from 'prop-types'
import { fetchNpsParkData, fetchNpsParkArticles } from '../../store/actions'
import Park from '../../components/Park/Park'

class ParkContainer extends Component {
  static propTypes = {
    fetchNpsParkData: func.isRequired,
    fetchNpsParkArticles: func.isRequired,
    park: shape({
      nps_code: string.isRequired,
    }),
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    Promise.all([
      this.props.fetchNpsParkData(this.props.park.nps_code),
      this.props.fetchNpsParkArticles(this.props.park.nps_code),
    ]).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    return (
      <Park
        isLoading={this.state.isLoading}
        park={this.props.park}
        npsParkArticles={this.props.npsParkArticles}
        npsParkData={this.props.npsParkData}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    npsParkArticles: state.npsParkArticles,
    npsParkData: state.npsParkData,
  }
}

export default connect(mapStateToProps, { fetchNpsParkData, fetchNpsParkArticles })(ParkContainer)

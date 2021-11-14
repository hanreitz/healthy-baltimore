import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStores } from '../actions/actionCreator'
import Map from '../presentationComponents/Map'

class MapContainer extends Component {

  componentDidMount(){
    this.props.getStores()
  }

  render() {

    return (
      <div>
        <Map />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(mapStateToProps, { getStores })(MapContainer)
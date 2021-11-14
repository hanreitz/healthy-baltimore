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
        <Map
          id="myMap"
          options={{
            center: { lat: 39.2904, lng: -76.6122 },
            zoom: 14
          }}
          onMapLoad={map => {
            const markers = this.props.stores.map(store => {
              return new window.google.maps.Marker({
                position: { lat: store.attributes.latitude, lng: store.attributes.longitude },
                map: map,
                title: store.attributes.storename
              })
            })
          }}
        />
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
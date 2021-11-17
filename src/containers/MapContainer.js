import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStores } from '../actions/actionCreator'
import Map from '../presentationComponents/Map'

class MapContainer extends Component {
  // state = {
  //   location: ''
  // }

  // enrichStores(){
  //   this.props.stores.forEach(store => {
  //     const name = store.attributes.storename
  //     if(name === 'ALDI' || name === 'DMG FOODS' || name === 'PRICERITE' || name === 'SAVE A LOT'){
  //       store.attributes.label = 'Discount'
  //     } else if (name === 'WHOLE FOODS'){
  //       store.attributes.label = 'Limited'
  //     } else if (name === 'BIRITE' || name === `EDDIE'S OF MT VERNON` || name === `EDDIE'S OF ROLAND PARK`){
  //       store.attributes.label = 'Small'
  //     } else if (name === 'Streets Market and Café' || name === 'STREETS MARKET & CAFÉ' || name === 'HARVEST FARE' || name === 'HAZLO INTERNATIONAL FOODS' || name === 'LA MART' || name === 'COMPARE FOODS' || name === 'SHOPRITE' || name === 'SPROUTS FARMERS MARKET' || name === 'MEGAMART BALTIMORE'){
  //       store.attributes.label = 'Medium'
  //     } else if (name === 'FOOD DEPOT' || name === 'GIANT' || name === 'HARRIS TEETER' || name === 'MOMS' || name === 'SAFEWAY' || name === 'SHOPPERS' || name === 'THE MARKETS AT HIGHLANDTOWN'){
  //       store.attributes.label = 'Large'
  //     }
  //   })
  // }

  componentDidMount(){
    this.props.getStores()
    // this.enrichStores()
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
    // filters: state.filters
  }
}

export default connect(mapStateToProps, { getStores })(MapContainer)
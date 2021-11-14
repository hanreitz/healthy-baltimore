import React from 'react'
import { connect } from 'react-redux'
import { getStores } from '../actions/actionCreator'

class List extends React.Component {
  componentDidMount() {
    this.props.getStores()
  }

  render() {
    const stores = this.props.stores
    return (
      <div>
        {console.log(this.props.stores)}
        {stores.map(store => (
          <div>
            <h2>{store.attributes.storename}</h2>
            <address>{store.attributes.address}</address>
          </div>
        ))}
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(mapStateToProps, {getStores})(List)
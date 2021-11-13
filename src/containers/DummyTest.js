import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStores } from '../actions/actionCreator'

class DummyTest extends Component {
  
  componentDidMount(){
    this.props.getStores()
  }

  render() {
    return (
      <ul>
        {this.props.stores.map(store => <li>{store.attributes.storename}</li>)}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(mapStateToProps, { getStores })(DummyTest)
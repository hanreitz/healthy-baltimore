import React, { Component } from 'react'
import DummyTest from './DummyTest'
import Map from '../presentationComponents/Map'

export default class Main extends Component {
  // replace DummyTest with actual map component in future
  render() {
    return (
      <div>
        <DummyTest />
        <Map />
      </div>
    )
  }
}

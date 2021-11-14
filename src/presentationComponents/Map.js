// pinned locations here
import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.2904, lng: -76.6122 },
      zoom: 8
    });
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }} id={this.props.id} />
    );
  }
}

export default Map
import React, { Component} from 'react';
import Marker from './marker'
import GoogleMapReact from 'google-map-react';

class FlatMap extends Component {
    static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render () {
    return (
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
      )
  }
}


export default FlatMap;

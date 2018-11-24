import ReactMapGL, {Marker}  from 'react-map-gl';
import React, { Component} from 'react';
// import Marker from './marker';

const TOKEN = 'pk.eyJ1IjoiYWxleGtlbGx5NTEiLCJhIjoiMjQxZDU2YjM2ZWYwNzk5NDJkZWViNjk1NzIwZTI2MGEifQ.7XNHD78b47u3es1m8sdAkQ';

class FlatMap extends Component {
    constructor(props) {
    super(props) ;

    this.state = {
      viewport: {
        width: 700,
        height: 700,
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 11
      }
    }
  }


  render () {
    return (
      <div className="map-container">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})} >
          <Marker latitude={48.8566} longitude={2.3522} offsetLeft={-20} offsetTop={-10}>
            <div>You are here</div>
          </Marker>
          </ReactMapGL>
        />
      </div>
      )
  }
}


export default FlatMap;




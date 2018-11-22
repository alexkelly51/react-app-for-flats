import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import FlatMap from './map';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props) ;

    this.state = {
      flats: flats,
      selectedFlat: null
    }
  }


  selectFlat = (id) => {
    this.setState({
      selectedFlat: id
    })
  }

  render() {
    return (
      <div className="wrapper">
        <FlatList selectFlat={this.selectFlat} flats={this.state.flats} />
        <FlatMap />
      </div>
    )
  }
}

export default App;


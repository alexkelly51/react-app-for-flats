import React, { Component} from 'react';
import flats from '../../data/flats'
import FlatList from './flat_list'
import FlatMap from './map'


class App extends Component {
  constructor(props) {
    super(props) ;


  }



render() {
  return(
    <div className="wrapper">
      <div className="flat-list">
        <FlatList />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
    )
}
}

export default App;


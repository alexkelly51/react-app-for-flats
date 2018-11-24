import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import FlatMap from './map';

class App extends Component {
  constructor(props) {
    super(props) ;

    this.state = {
      flats: flats,
      selectedFlat: 2.341225
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
        <FlatList selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat} flats={this.state.flats} />
        <FlatMap />
      </div>
    )
  }
}

export default App;


import React, { Component } from 'react';
import Flat from './flat'

class FlatList extends Component {
  render () {
    return (
      <div className="flat-list">
        {
          this.props.flats.map((flat) => {
            return (<Flat name={flat.name} key={flat.lng} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} />)
          })
        }
      </div>
    )
  }
}

export default FlatList;


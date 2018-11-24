import React, { Component } from 'react';


class Flat extends Component {

  handleClick = () => {
      this.props.selectFlat(this.props.lng);
    }

  render () {
    return (
      <div onClick={this.handleClick} key={this.props.lng} className={(this.props.selectedFlat === this.props.lng) ? 'card active' : 'card'} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(" + this.props.imageUrl + ")"}}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
      )
  }
}

export default Flat;


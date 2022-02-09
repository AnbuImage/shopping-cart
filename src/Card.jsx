import React, { Component } from 'react';
import './cardstyle.css';
import Counter from "./Counter.jsx";


export default class Card extends Component {
  
  render() {
    console.log(this.props.productDetails);
    return (
      <>
      <div className="card">
              <h1>{this.props.productDetails.name} </h1>
              <p> {this.props.productDetails.desc} </p>
              <div className="overlay">
                <Counter />
              </div>
      </div>
      </>
    )
  }
}

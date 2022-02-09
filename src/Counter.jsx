import React, { Component } from 'react'
import "./counterstyle.css";

export default class Counter extends Component {
  render() {
    return (
        <div className="counter">
        Quantity &nbsp;
        <span className="badge badge-warning">
            "Zero"
        </span>
        &nbsp;
        <button className="btn btn-secondary">+</button>
        <button className="btn btn-secondary">-</button>
        </div>
    )
  }
}

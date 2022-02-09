import React from 'react'
import './cardstyle.css';

export default function Card(props) {
  return (
    <>
    <div className="card">
            <h1>{props.prodname} </h1>
            <p> {props.description} </p>
    </div>
    </>
  )
}

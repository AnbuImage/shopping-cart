import React, { Component } from 'react'
import './cartstyle.css';
export default class Cart extends Component {
  state = {
    items: ["Strawberry Shake", "Chocolate Fantasy"],
    popup: false
  };
  getPopupState = () => {
    let pop_style = this.state.popup === true ? "popup menu-on" : "popup menu-off";
    return(pop_style);
  }
  handlePopup = () => {
    let popup = !this.state.popup;
    this.setState({popup});
    
  };
  render() {
    return (
      <>
      <div className="cart" onClick={this.handlePopup}>
        <h3> My Cart </h3>
        <div className={this.getPopupState()}> 
          <ul>
            {this.state.items.map(item =>(
              <li>{item}</li>
            ))}

          </ul>
        </div>
      </div>
    </>
    )
  }
}

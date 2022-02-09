import React, { Component,useState } from 'react'
import './cartstyle.css';
function Cart(){
  const [popup,setPopup] = useState(false);  
     
    return (
      <>
      <div className="cart" onClick={()=>setPopup(!popup)}>
        <h3> My Cart </h3>
        <div className={popup?'menu-on':'menu-off'}> 
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </div>
      </div>
      
    </>
    
    )
    
}
export default Cart;

import React from 'react';
import './App.css';
import Card from './Card.jsx';
import Cart from './Cart.jsx';


export default function App() {
  return (
      <>
<header>
    <div className="grid1200">
        <Cart/>
    </div>
</header>
<main>
    <div className="grid1200">
           <Card
              prodname="Strawberry Shake"
              description="Strawberries and Milk"
            />
            <Card
              prodname="Chocolate Fantasy"
              description="Brownie with Vanilla"
            />
            <Card
              prodname="Mediterranean Delight"
              description="Nuts and Dates"
            />
    </div>
</main>
</>
  )
}

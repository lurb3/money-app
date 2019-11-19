import React, { useState } from 'react';

// Components
import Movements from './components/Movements/Movements.js';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [budget, setBudget] = useState('109,60');
  const [purchases, setPurchase] = useState([
    { purchase: 'Padaria Pastelaria', amount: '2,40', date: '20-11-2019' },
    { purchase: 'Restaurante', amount: '15,00', date: '17-11-2019' },
    { purchase: 'Mercearia Supermercado', amount: '80,00', date: '20-11-2019' },
  ]);

  const addPurchase = () => { // Add a new purchase to purchases array
    const newPurchase = { purchase: 'Pneus Auto', amount: '150,00', date: '04-06-2019' };
    setPurchase(oldPurchases => [...oldPurchases, newPurchase]);
  }

  return (
  <div className="appContainer">
   <div className="container p-0">
      <div className="row">
        <div className="col-12 text-center text-light">
          <h1>Total Budget</h1>
          <p>{ budget }</p>
        </div>
      </div>

      {purchases.map(purchase => (
        <Movements purchase={ purchase.purchase } amount={ purchase.amount } date={ purchase.date }/>
      ))}

      <button onClick={ addPurchase }>Add New</button>

    </div>
  </div>
  );
}

export default App;

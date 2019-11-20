import React, { useState } from 'react';

// Components
import Movements from './components/Movements/Movements.js';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [budget, setBudget] = useState('109,60');

  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const [purchases, setPurchase] = useState([
    { purchase: 'Padaria Pastelaria', amount: '2,40', date: '20-11-2019' },
    { purchase: 'Restaurante', amount: '15,00', date: '17-11-2019' },
    { purchase: 'Mercearia Supermercado', amount: '80,00', date: '20-11-2019' },
  ]);

  const addPurchase = (event) => { // Add a new purchase to purchases array
    /*const newPurchase = { purchase: 'Pneus Auto', amount: '150,00', date: '04-06-2019' };
    setPurchase(oldPurchases => [...oldPurchases, newPurchase]);*/
    event.preventDefault();
    console.log({ item, amount, date });
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

      <form onSubmit={ addPurchase }>
        <label>
          Purchase:
          <input type="text" name="item" value={item} onChange={ e => setPurchase(e.target.value) }/>
        </label>
        Amount:
        <input type="text" name="amount" value={amount} onChange={ e => setAmount(e.target.value) } />
        Date:
        <input type="text" name="date" value={date} onChange={ e => setDate(e.target.value) } />
        <input type="submit" value="Enter" />
      </form>

    </div>
  </div>
  );
}

export default App;

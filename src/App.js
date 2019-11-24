import React, { useState } from 'react';

// Components
import Movements from './components/Movements/Movements.js';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [budget, setBudget] = useState(109);

  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const [purchases, setPurchases] = useState([
    { item: 'Padaria Pastelaria', amount: 1, date: '20-11-2019' },
    { item: 'Restaurante', amount: 2, date: '17-11-2019' },
    { item: 'Mercearia Supermercado', amount: 3, date: '20-11-2019' },
  ]);

  const addPurchase = (event) => { // Add a new purchase to purchases array
    event.preventDefault();
    if(item !== '' && amount !== '' && date !== '') {
      setPurchases(oldPurchases => [...oldPurchases, { item, amount, date }]);
      console.log(purchases);
      let calcBudget = budget;
      {purchases.map(purchase => (
        calcBudget -= amount,
        setBudget(calcBudget)
      ))}
    }
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
        <Movements item={ purchase.item } amount={ purchase.amount } date={ purchase.date }/>
      ))}

      <form onSubmit={ addPurchase }>
          Purchase:
          <input type="text" name="purchase" value={item} onChange={ e => setItem(e.target.value) }/>
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

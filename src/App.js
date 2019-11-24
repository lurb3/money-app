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
  ]);

  const addPurchase = (event) => { // Add a new purchase to purchases array
    event.preventDefault();

    if(item !== '' && amount !== '' && date !== '') {
      let calcBudget = budget;
      const data = { item, amount, date };

      setPurchases(oldPurchases => [...oldPurchases, data]);

        calcBudget -= amount;
        setBudget(calcBudget);

        console.log(data);

        fetch('https://www.gustavomonteiro.pt/apis/money_app/savePurchase.php', {
          method: 'POST',
          body: JSON.stringify(data),
        });
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

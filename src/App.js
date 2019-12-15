import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Movements from './components/Movements/Movements.js';
import Signin from './components/Signin/Signin.js';
// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [budget, setBudget] = useState();

  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    let userid = 1;

    fetch('https://gustavomonteiro.pt/apis/money_app/getPurchases.php?userid=' + userid + '', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        setPurchases(json);
      });

      fetch('https://gustavomonteiro.pt/apis/money_app/getBudget.php?userid=' + userid + '', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(json => {
          setBudget(json[0].totalBudget)
        });

  }, []);

  const addPurchase = (event) => { // Add a new purchase to purchases array
    let calcBudget = budget;
    let userid = 1;

    event.preventDefault();

    if(item !== '' && amount !== '' && date !== '') {
      const data = { item, amount, date };

      setPurchases(oldPurchases => [...oldPurchases, data]);
        data['userid'] = 1;

        fetch('https://www.gustavomonteiro.pt/apis/money_app/savePurchase.php', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        setItem(''); setAmount(''); setDate('');

        calcBudget -= amount;
        setBudget(calcBudget);

        const dataBudget = {totalBudget: calcBudget, userid: userid};

        fetch('https://www.gustavomonteiro.pt/apis/money_app/saveBudget.php', {
          method: 'POST',
          body: JSON.stringify(dataBudget),
        });

    }
  }

	return (
		<Router>
			<Switch>
				<Route path="/signin">
					<Signin />
				</Route>
				<Route path="/money-app">
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
				</Route>
			</Switch>
		</Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Movements from './components/Movements/Movements.js';
import Signin from './components/Signin/Signin.js';
import Form from './components/Form/Form.js';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

	const inputFields = [ 'Purchase', 'Amount', 'Date' ];
	const formFields = {};

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

  const addPurchase = () => { // Add a new purchase to purchases array
	console.log("clicked");
    let calcBudget = budget;
    let userid = 1;

    if(item !== '' && amount !== '' && date !== '') {
      const data = { item, amount, date };

      setPurchases(oldPurchases => [...oldPurchases, data]);
        data['userid'] = 1;

        fetch('https://www.gustavomonteiro.pt/apis/money_app/savePurchase.php', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        calcBudget -= amount;
        setBudget(calcBudget);

        const dataBudget = {totalBudget: calcBudget, userid: userid};

        fetch('https://www.gustavomonteiro.pt/apis/money_app/saveBudget.php', {
          method: 'POST',
          body: JSON.stringify(dataBudget),
        });
    }
  }

  	const handleInputChange = (e) => {
		formFields[e.target.name] = e.target.value;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setAmount(formFields.Amount);
		setItem(formFields.Purchase);
		setDate(formFields.Date);
	}

	useEffect(() => {
		addPurchase();
	}, [date]);

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

							<Form 
								inputs = { inputFields }
								submitText = { 'Add New Item' }
								onSubmit = { handleSubmit }
								inputHandler = { handleInputChange }
							/>

						</div>
					</div>
				</Route>
			</Switch>
		</Router>
  );
}

export default App;

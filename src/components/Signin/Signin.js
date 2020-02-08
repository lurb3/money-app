import React from 'react';
import './Signin.scss'

// Components
import Form from '../Form/Form.js';

const Signin = () => {
	const inputFields = [ 'Login', 'Password' ];
	const formFields = {};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formFields);
	}

	const handleInputChange = (e) => {
		formFields[e.target.name] = e.target.value;
	}

    return (
        <div className="sign-in container">
			<div className="row sign-in-form">
				<h3>LOGIN TO MONEY APP</h3>
				<Form
					inputs = { inputFields }
					inputType = { ['Text', 'Password'] }
					submitText = { 'Login' }
					onSubmit = { handleSubmit }
					inputHandler = { handleInputChange }
				/>
			</div>
        </div>
    );
};

export default Signin;
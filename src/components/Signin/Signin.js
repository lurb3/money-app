import React from 'react';
import './Signin.scss'

// Components
import Form from '../Form/Form.js';

const Signin = () => {
	const inputFields = [ 'Login', 'Password' ];
	const formFields = {};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("button clicked");
	}

	const handleInputChange = (e) => {
		formFields[`${e.target.name}`] = e.target.value;
		console.log(formFields);
	}

    return (
        <div className="Signin">
			<div className="row">
				<Form 
					inputs = { inputFields }
					submitButton = { 'Login' }
					onSubmit = { handleSubmit }
					inputHandler = { handleInputChange }
				/>
			</div>
            <div className="row">
                <h1>Signin Component</h1>
            </div>
        </div>
    );
};

export default Signin;
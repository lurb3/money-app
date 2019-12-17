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
        <div className="Signin">
			<div className="row">
				<Form 
					inputs = { inputFields }
					submitText = { 'Login' }
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
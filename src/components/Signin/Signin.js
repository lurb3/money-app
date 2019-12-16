import React from 'react';
import './Signin.scss'

// Components
import Form from '../Form/Form.js';

const Signin = () => {
	const test = [ 'Login', 'Password' ];
    return (
        <div className="Signin">
			<div className="row">
				<Form 
					inputs = { test }
					submitButton = { 'Login' }
				/>
			</div>
            <div className="row">
                <h1>Signin Component</h1>
            </div>
        </div>
    );
};

export default Signin;
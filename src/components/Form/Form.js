import React from 'react';
import './Form.scss'

const Form = ( { inputType, inputs, submitText, onSubmit, inputHandler }) => {
    return (
        <div className="form">
			<form>
				{
					inputs.map(function(input, index){
						return (
							<div className="text-center">
								<input type = { inputType[index] } name = { input } placeholder= { input } onChange = { inputHandler }/>
							</div>
						);
					})
				}

				<div>
					<input type="submit" value = { submitText } onClick = { onSubmit }/>
				</div>
			</form>
        </div>
    );
};

export default Form;
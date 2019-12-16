import React from 'react';

const Form = ( { inputs, submitButton, onSubmit, inputHandler }) => {
    return (
        <div className="Form">
			<form>
				{
					inputs.map(function(input){
						return (
							<div>
								<div>{ input }</div>
								<input type = "text" name = { input } onChange = { inputHandler }/>
							</div>
						);
					})
				}

				<div>
					<input type="submit" value = { submitButton } onClick = { onSubmit }/>
				</div>
			</form>
        </div>
    );
};

export default Form;
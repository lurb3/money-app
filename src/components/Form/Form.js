import React from 'react';

const Form = ( { inputType, inputs, submitText, onSubmit, inputHandler }) => {
    return (
        <div className="form">
			<form>
				{
					inputs.map(function(input, index){
						return (
							<div>
								<input type = { inputType[index] } name = { input } placeholder="Name" onChange = { inputHandler }/>
							</div>
						);
					})
				}

				<div>
					<input type="submit" placeholder="Email" value = { submitText } onClick = { onSubmit }/>
				</div>
			</form>
        </div>
    );
};

export default Form;
import React from 'react';

const Form = ( { inputType, inputs, submitText, onSubmit, inputHandler }) => {
    return (
        <div className="Form">
			<form>
				{
					inputs.map(function(input, index){
						return (
							<div>
								<div>{ input }</div>
								<input type = { inputType[index] } name = { input } onChange = { inputHandler }/>
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
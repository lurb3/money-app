import React from 'react';

const Form = ( { inputs, submitButton } ) => {
    return (
        <div className="Form">
			<form>
				{
					inputs.map(function(input){
						return (
							<div>
								<div>{ input }</div>
								<input type = "text" name = { input } value = { input } />
							</div>
						);
					})
				}

				<div>
					<input type="submit" value = { submitButton } />
				</div>
			</form>
        </div>
    );
};

export default Form;
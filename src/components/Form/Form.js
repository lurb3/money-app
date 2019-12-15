import React from 'react';

const Form = ( { test, submit } ) => {
    return (
        <div className="Form">
			<form>
				{
					test.map(function(input){
						return (
							<div>
								<div>{ input }</div>
								<input type = "text" name = { input } value = { input } />
							</div>
						);
					})
				}

				<div>
					<input type="submit" value = { test[2] } />
				</div>
			</form>
        </div>
    );
};

export default Form;
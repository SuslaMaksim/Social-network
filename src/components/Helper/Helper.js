import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {required,maxLengthCreator} from '../../validator/validator.js';


export let fieldCreator = (placeholder,name,component,validate,props={},text='')=> {


	return (

			<div>   
					
						<Field placeholder ={placeholder}  name={name} component ={component} validate = {validate} {...props}/>

						{text}
			</div>
		)
}
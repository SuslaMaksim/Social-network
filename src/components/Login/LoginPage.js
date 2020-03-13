import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {Input} from '../Commons/FormControls.js';
import {required,maxLengthCreator} from '../../validator/validator.js';
import {connect} from 'react-redux';
import {login} from '../../reducer/reducer-header.js';
import {Redirect} from 'react-router-dom';
import css from './LoginPage.module.css';

import {fieldCreator} from '../Helper/Helper.js';



const maxLength10 = maxLengthCreator(25);

	

const Login = (props) => {
	

	
  return ( 
		
        <form onSubmit = {props.handleSubmit} className={css.form}>

			<div className={css.input_container}>
        			{fieldCreator('Email',"email",Input,[required,maxLength10])}
			</div>
			<div className={css.input_container}>
        			{fieldCreator('Password',"password",Input,[required,maxLength10],{type: 'password'})}
			</div>
				
				
				{props.error && <div className={css.container_error}>
										<span className={css.error}> {props.error}</span>
					          </div>}



			<div className={css.checkbox_container}>
					{fieldCreator(null,"rememberMe",Input,[],{type: 'checkbox'})}
					<span>Remember Me</span>
			</div>
					{ props.captchaUrl&& <div className={css.captha}>
											<div className={css.captha_photo_container}>
											 <img className={css.captha_photo} src={props.captchaUrl} />
											</div>
											<div className={css.captha_input}>
											{fieldCreator("Enter Captca","captca",Input,[required])}

											</div>
											
									   </div>

                                      }
			
				
				<div className={css.button_container}>
						<button>Login</button>
				</div>

        </form>
    
        
  );
};



let LoginReduxForm = reduxForm({form:'login'})(Login)



let loginForm = (props)=>{


	

	let submit = formData => props.login(formData.email,formData.password,formData.rememberMe,formData.captca)
	if(props.auth) return <Redirect to ={'/contant'}/>


	return (
		<div className={css.loginForm_container}>
			<div className={css.loginForm}>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={submit} captchaUrl ={props.captchaUrl}/>
			</div>
		</div>

	)
}


let mapStateToProps = state =>{

	return{

		auth: state.header.isAuth,
		captchaUrl: state.header.captchaUrl
	}
}


export default connect(mapStateToProps, {login})(loginForm);
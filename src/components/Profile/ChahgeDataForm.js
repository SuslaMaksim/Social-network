import React from 'react';
import {Field,reduxForm} from 'redux-form';

import {Input,TextArea} from '../Commons/FormControls.js';
import {fieldCreator} from '../Helper/Helper.js';
import style from '../Commons/FormControls.module.css';
import s from "./Profile.module.css";

let DataFormEdit = (props) => {


	return (
		
	

	<form onSubmit ={ props.handleSubmit} className={s.aboutProfile}>


				 {props.error && <div>
										<span className={style.error}> {props.error}</span>
					          </div>} 
                <div><b>My Full Name</b></div>
				{fieldCreator('Full name', "fullName",Input,[])}
				<div><b>lookingForAJob</b></div>
				{fieldCreator('', "lookingForAJob",Input,[],{type:'checkbox'})}
				<div><b>My professional skills:</b> </div>
				{fieldCreator('My professional skills', "lookingForAJobDescription",TextArea,[])}
			    <div><b>About Me</b> </div>
			    {fieldCreator('About Me', "aboutMe",TextArea,[])}

			    {Object.keys(props.profile.contacts).map( key =>{
			    	return <div key = {key}>
			    	<b>{key}</b>:
					{fieldCreator(key, "contacts."+key,Input,[])}
			    	</div> 


			    })}
				

				<div >
				   <button className={s.aboutProfile_button}> Save Form</button>
				</div>
				
			</form>
			  
			
		
	)


}


let DataFormEditRedux = reduxForm({form:'dataFormEdit'})(DataFormEdit)


export default DataFormEditRedux;




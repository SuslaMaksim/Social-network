import React,{useState,useEffect} from 'react';
import css from './Profile.module.css';



let Status = props => {

	
let[input,setInput] = useState(false);
let [status,setStatus] = useState(props.status);


useEffect(()=>{
	setStatus(props.status)
},[props.status])

let toggleToInput = ()=>{
	setInput(true)
}
let toggleToText = ()=>{
	setInput(false);
	props.updateStatus(status);
}

let changeStatus = (e)=>{
	setStatus(e.target.value)
}


	return(

		<div>
				{  !input &&
				 

					<div className={css.profile_status_info}>
						<span className={css.profile_status_name}>My Status</span> : <span className={css.profile_status_text} onDoubleClick = {toggleToInput}>{!status ? '-------' : status}</span>

				    </div>

				}
				
				{  input &&
					<div>
						<span className={css.profile_status_text}>My Status </span> : <input type="text" autoFocus={true} value={status} onBlur = {toggleToText}onChange = {changeStatus}/>

				    </div>


				}
				

		</div>
		)
}




export default Status;
import React,{useState,useEffect} from 'react';
import img from '../../img/2.jpg';
import Preloader from '../AddUsers/Preloader.js';
import Status from './Status.js';
import user from '../../img/userLarg.jpg';
import s from './Profile.module.css';
import DataFormEditRedux from './ChahgeDataForm.js';







let ProfileInfo = React.memo((props)=>{


let[editMode,setEditMode] = useState(true);

	let savePhoto = (e)=>{

		if(e.target.files.length){
			props.savePhoto(e.target.files[0])
		}
	}

let handleSubmit = (file) => {

	props.updateDataUser(file)
		.then(()=>{

			setEditMode(true)

		})

}



	return(
		<div className={s.profileInfo}>
			  
	          <div className={s.profile_container}>
				  <div className={s.profile_user_photo}>
					  <div className={s.user_photo_container}>

						  <img src={props.profile.photos.large || user} alt="" className={s.user_photo} />


					  </div>
					  {props.owner &&  <div className={s.input_photo}>
						  <input type="file" onChange = {savePhoto} id="uploud" className={s.hide}/>
						  <label htmlFor="uploud" className={s.input_photo_change}>Change Photo</label>
					  </div>}


				  </div>





				<div className={s.profile_status}>
					<Status  status = {props.status} updateStatus = {props.updateStatus}/>
				</div>


	        	{editMode ? <DataForm profile = {props.profile}
	        	                      owner = {props.owner}
	        	                      editMode = {()=>{setEditMode(false)}}/>
	        	          : <DataFormEditRedux 
	        	                      profile = {props.profile} 
	        	                      onSubmit={handleSubmit}
	        	                      initialValues = {props.profile}
	        	                       />}  

	           
	          </div>

        </div>

	)
})


 
let Contact = (props) =>{
return <div> <b>{props.title}</b>: <span className={s.aboutProfile_information_name}>{props.value}</span> </div>

}




let DataForm = (props) => {


	return (
		<div className={s.aboutProfile}>
			
			<div className={s.aboutProfile_information}> <b>My Full Name</b> :  <span className={s.aboutProfile_information_name}>{props.profile.fullName} </span> </div>
			<div className={s.aboutProfile_information}> <b> Loking fo a Job ? </b> : <span className={s.aboutProfile_information_name}>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>  </div>
			<div className={s.aboutProfile_information}> <b> My professional skills</b> : <span className={s.aboutProfile_information_name}>{props.profile.lookingForAJobDescription}</span></div>
			<div className={s.aboutProfile_information}> <b>About me :</b><span className={s.aboutProfile_information_name}>{props.profile.aboutMe}</span> </div>
			

			<div className={s.aboutProfile_information}><b>Contacts </b> :<div className={s.contacts}> {Object.keys(props.profile.contacts).map( key =>{
							return 	<Contact key = {key} title = {key} value = {props.profile.contacts[key]}/>})}</div>
			</div >
			{props.owner && <button className={s.aboutProfile_button} onClick = {props.editMode}>Chage Form</button>}
		</div>
	)


}

export default ProfileInfo;

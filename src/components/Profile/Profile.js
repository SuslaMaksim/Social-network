import React from 'react';
import ContainerContant from '../ContainerContent.js';
import ProfileInfo from './ProfileInfo.js';
import profile from './Profile.module.css';
import Preloader from "../AddUsers/Preloader";
import ContainerNotofications from "./ContainerNotofications";






	let Profile = (props)=>{

	if(!props.profile ){
		return (
			<div>

				<Preloader/>

			</div>



		)

	}
	return(
				
				<div className={profile.profile}>
					<ProfileInfo profile = {props.profile} 
					             owner = {props.owner} 
					             status = {props.status}
					             updateStatus = {props.updateStatus}
					             savePhoto = {props.savePhoto}
					             updateDataUser = {props.updateDataUser}
					             
					             />
					<ContainerContant/>

					<ContainerNotofications/>

				</div>

		)


}



export default Profile;

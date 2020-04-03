import React from 'react';
import Profile from './Profile.js';
import {connect} from 'react-redux';
import {setProfile,getStatus,updateStatus,savePhoto,updateDataUser} from '../../reducer/reducer-content';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../Hoc/Hoc.js';
import {compose} from 'redux'





class ContainerProfile extends React.Component{
	
    refreshProfile = () =>{
	   let userID = this.props.match.params.userID;
			
				if(!userID){
			        userID = this.props.userID;
			        if(!userID) this.props.history.push('/login')
		}
		this.props.setProfile(userID);
		this.props.getStatus(userID);

	}




	componentDidMount(){
		this.refreshProfile();
		
	}
	componentDidUpdate(prevProps,prevState,snapshot){
		if(this.props.match.params.userID !== prevProps.match.params.userID){
			this.refreshProfile();
		}
	}


	
render(){

			return(
				
					<Profile owner = {!this.props.match.params.userID}
					        {...this.props}
					         profile = {this.props.profile}
					         updateStatus = {this.props.updateStatus}
					         status = {this.props.status}


					         />
				

		)



}
	



}

let mapStateToProps = (state)=>{

return{


	profile: state.content.profile,
	status: state.content.status,
	userID: state.header.UserId
	
	
}
}


export default compose(
	connect(mapStateToProps,{setProfile,getStatus,updateStatus,savePhoto,updateDataUser}),
	withRouter
	
	)(ContainerProfile)



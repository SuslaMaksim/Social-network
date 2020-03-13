import React from 'react';

import AddUsers from './Addusers.js';
import Preloader from './Preloader.js';
import {usersAPI} from '../../dal/API.js';
import {withAuthRedirect} from '../Hoc/Hoc.js'
import {compose} from 'redux';

import{addUsers,addPage,addTotalCounter,addPageSize,addPreloader,addFollowingInProgress} from '../../reducer/selectors.js'


import {followToUser,unFollow,setfollowingInProgress,getUsers} from '../../reducer/reducer-addUsers.js';
import {connect} from 'react-redux';






class AddUsersAPI  extends React.Component{
		
			
		componentDidMount(){
			this.props.getUsers(this.props.page,this.props.pageSize)
		}

		
			
		changePage = (page)=>{
				this.props.getUsers(page,this.props.pageSize)

		}



render(){

	
	return(		
		<>
			<div> {this.props.preloader ? <Preloader/> : null}</div>
			<AddUsers  totalCounter ={this.props.totalCounter}
					   pageSize ={this.props.pageSize}
					   page = {this.props.page}
					   users = {this.props.users}
					   changePage = {this.changePage}
					   followToUser = {this.props.followToUser}
					   unFollow = {this.props.unFollow}
					   setfollowingInProgress = {this.props.setfollowingInProgress}
					   followingInProgress = {this.props.followingInProgress}




			/>
		</>
	)


}


}


let mapStateToProps = (state)=>{

	return{

		users: addUsers(state),
		page: addPage(state),
		totalCounter: addTotalCounter(state),
		pageSize: addPageSize(state),
		preloader: addPreloader(state),
		followingInProgress: addFollowingInProgress(state)

	}
}



export default compose(

connect(mapStateToProps,{followToUser,unFollow,setfollowingInProgress,getUsers}),
withAuthRedirect

)(AddUsersAPI);
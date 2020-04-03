import React from 'react';

import AddUsers from './Addusers';
import Preloader from './Preloader';
import {withAuthRedirect} from '../Hoc/Hoc'
import {compose} from 'redux';
import{addUsers,addPage,addTotalCounter,addPageSize,addPreloader,addFollowingInProgress} from '../../reducer/selectors'
import {followToUser, getUsers, unFollow} from '../../reducer/reducer-addUsers';
import {connect} from 'react-redux';
import {UserType} from "../../reducer/types/types";
import {AppStateType} from "../../store/store";

type MapStateToPropsType = {
    totalCounter: number
    pageSize:number
    page: number
    users: Array<UserType>
    followingInProgress: Array<number>
    preloader: boolean
}
type MapDispatchToPropsType = {
    getUsers: (page:number,pageSize:number)=> void
    followToUser: (id:number)=> void,
    unFollow: (id:number)=> void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType



class AddUsersAPI  extends React.Component<PropsType>{
		
			
		componentDidMount(){
			this.props.getUsers(this.props.page,this.props.pageSize)
		}

		changePage = (page:number)=>{
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
					   followingInProgress = {this.props.followingInProgress}




			/>
		</>
	)


}


}


let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{

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
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
connect<MapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,{followToUser,unFollow,getUsers}),
withAuthRedirect

)(AddUsersAPI);
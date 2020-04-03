import React from 'react';
import css from './AddUsers.module.css';
import Paginator from './paginator';
import User from "./User";
import {UserType} from "../../reducer/types/types";


type PropsType = {
	totalCounter: number,
	pageSize: number,
	page:number,
	users: Array<UserType>,

	changePage: (page:number)=> void,
	followToUser: (id:number)=> void,
	unFollow: (id:number)=> void,
	followingInProgress: Array<number>
}

let  AddUsers: React.FC<PropsType> =(props)=> {


	
	
	return(
			
			<div className={css.container}>

				<div className={css.container_users}>
                 {props.users.map( user =>  <User key = {user.id}
                                                  user = {user}
                                                  followToUser = {props.followToUser}
                                                  followingInProgress = {props.followingInProgress}
                                                  unFollow = {props.unFollow}


                                                   />)}
				</div>
				<Paginator changePage = {props.changePage }
						   totalCounter ={props.totalCounter}
						   pageSize= {props.pageSize}
						   page={props.page}/>

			</div>


		)





}


export default AddUsers;
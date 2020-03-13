import React from 'react';
import css from './AddUsers.module.css';


import {usersAPI} from '../../dal/API.js';
import Paginator from './paginator.js';

import User from "./User.js";




let  AddUsers =(props)=> {


	
	
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
				<Paginator changePage = {props.changePage } totalCounter ={props.totalCounter}  pageSize= {props.pageSize} page={props.page}/>

			</div>


		)





}


export default AddUsers;
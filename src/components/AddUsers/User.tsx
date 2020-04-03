import React from 'react';
import css from './AddUsers.module.css';
import {NavLink} from 'react-router-dom';
import img from "../../img/user.png";
import {UserType} from "../../reducer/types/types";


type PropsType = {
	user: UserType
	unFollow: (id:number)=> void
	followToUser: (id:number)=> void
	followingInProgress: Array<number>
}
let User:React.FC<PropsType> = ({user,followToUser,followingInProgress,unFollow})=>{
	return(

	<div className={css.user}>
				<div className={css.user_container}>

					<div className={css.user_container_photo}>
						<NavLink to={'/contant/'+ user.id}>
							<img src={user.photos.small == null ? img : user.photos.small } className={css.user_photo} />
						</NavLink>

					</div>


					<div className={css.user_info}>
						<span>{user.name}</span>

						<div className={css.button}> {user.followed ? <button disabled ={followingInProgress.some(id => id === user.id)}
																			  onClick = {()=> {unFollow(user.id)}

																			  }>Unfollow</button> : <button  disabled ={followingInProgress.some(id => id === user.id)}
																											 onClick = {()=> {followToUser(user.id) }}>Follow</button>}
						</div>
					</div>


				</div>
	
	

	 </div>


		)
}


export default User;
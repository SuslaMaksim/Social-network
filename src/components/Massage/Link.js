import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Link.module.css';
import photo from '../../img/user.png'



const Link = (props)=> {

		return <NavLink className={css.penfriend}   activeClassName={css.penfriend_active} to={'/message/'+ props.id}>
					<div className={css.penfriend_container_photo}>
						<img className={css.penfriend_photo} src={photo} />

					</div>
					<div className = {css.penfriend_link}  >{props.name} </div>

			   </NavLink>
}





export default Link;

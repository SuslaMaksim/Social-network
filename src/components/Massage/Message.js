import React from 'react';
import css from './Massage.module.css';



const Message = (props)=> {

		return <div className={css.massage} >
					<p>{props.message}</p>

			   </div>
}





export default Message;

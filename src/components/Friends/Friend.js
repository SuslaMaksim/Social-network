import React from 'react';
import Fr from './Friends.module.css'



const Friend = (props) => {
  return ( 

    <div className={Fr.friend}>

    	<span className={Fr.img}>1</span>
		<span> {props.name} </span>
        
    </div>
        
  );
};



export default Friend;

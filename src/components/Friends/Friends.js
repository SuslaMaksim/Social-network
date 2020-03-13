import React from 'react';
import Fr from './Friends.module.css';
import Friend from './Friend.js'


const Friends = (props) => {

		const friends = props.friends.map( friend => <Friend key ={friend.name} name={friend.name}/> )

  return ( 

    <div className={Fr.container}>
			{friends}
      

    </div>
        
  );
};



export default Friends;

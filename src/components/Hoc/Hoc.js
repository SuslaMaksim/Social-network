import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = state =>{

	return{
		auth: state.header.isAuth
	}
}

export const withAuthRedirect = (Component) => {


	class RedirectComponent extends React.Component{

render(){

	if(!this.props.auth) return <Redirect to ={'/login'}/>

	  return ( 
			   <Component {...this.props}/>
   
        
  )

}


	}
	
	let connectRedirectComponent = connect( mapStateToProps)(RedirectComponent)

	return connectRedirectComponent;

};





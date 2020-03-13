import React from 'react';
import Header from './Header.js';
import * as axios from 'axios';
import {connect} from 'react-redux';

import {logout} from '../../reducer/reducer-header.js';



class HeaderContainer extends React.Component {


 render(){

 	return <Header {...this.props} />
 }


}

const mapStateToProps = (state)=> ({

	isAuth: state.header.isAuth,
	login: state.header.login
});

export default connect(mapStateToProps,{logout})(HeaderContainer);

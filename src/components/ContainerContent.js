
import Content from './Content.js';
import {connect} from 'react-redux';


import {addMessage} from "../reducer/reducer-posts.js"




let mapStateToProps = (state)=>{
	

	return{

			posts: state.posts

	}


}



 

const ContainerContant = connect(mapStateToProps,{addMessage})(Content)

export default ContainerContant;
